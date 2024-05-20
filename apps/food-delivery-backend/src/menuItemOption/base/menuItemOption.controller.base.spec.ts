import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { MenuItemOptionController } from "../menuItemOption.controller";
import { MenuItemOptionService } from "../menuItemOption.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  additionalPrice: 42.424242424,
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  isDefault: "true",
  name: "exampleName",
  optionImageUrl: "exampleOptionImageUrl",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  additionalPrice: 42.424242424,
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  isDefault: "true",
  name: "exampleName",
  optionImageUrl: "exampleOptionImageUrl",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    additionalPrice: 42.424242424,
    createdAt: new Date(),
    description: "exampleDescription",
    id: "exampleId",
    isDefault: "true",
    name: "exampleName",
    optionImageUrl: "exampleOptionImageUrl",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  additionalPrice: 42.424242424,
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  isDefault: "true",
  name: "exampleName",
  optionImageUrl: "exampleOptionImageUrl",
  updatedAt: new Date(),
};

const service = {
  createMenuItemOption() {
    return CREATE_RESULT;
  },
  menuItemOptions: () => FIND_MANY_RESULT,
  menuItemOption: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("MenuItemOption", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MenuItemOptionService,
          useValue: service,
        },
      ],
      controllers: [MenuItemOptionController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /menuItemOptions", async () => {
    await request(app.getHttpServer())
      .post("/menuItemOptions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /menuItemOptions", async () => {
    await request(app.getHttpServer())
      .get("/menuItemOptions")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /menuItemOptions/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/menuItemOptions"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /menuItemOptions/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/menuItemOptions"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /menuItemOptions existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/menuItemOptions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/menuItemOptions")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
