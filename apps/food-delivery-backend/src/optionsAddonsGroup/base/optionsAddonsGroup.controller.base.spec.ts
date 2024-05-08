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
import { OptionsAddonsGroupController } from "../optionsAddonsGroup.controller";
import { OptionsAddonsGroupService } from "../optionsAddonsGroup.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  addOnName: "exampleAddOnName",
  addOnPrice: 42.424242424,
  addonsImageUrl: "exampleAddonsImageUrl",
  containsEgg: "true",
  createdAt: new Date(),
  id: "exampleId",
  isVegetarian: "true",
  lowerLimit: 42,
  updatedAt: new Date(),
  upperLimit: 42,
};
const CREATE_RESULT = {
  addOnName: "exampleAddOnName",
  addOnPrice: 42.424242424,
  addonsImageUrl: "exampleAddonsImageUrl",
  containsEgg: "true",
  createdAt: new Date(),
  id: "exampleId",
  isVegetarian: "true",
  lowerLimit: 42,
  updatedAt: new Date(),
  upperLimit: 42,
};
const FIND_MANY_RESULT = [
  {
    addOnName: "exampleAddOnName",
    addOnPrice: 42.424242424,
    addonsImageUrl: "exampleAddonsImageUrl",
    containsEgg: "true",
    createdAt: new Date(),
    id: "exampleId",
    isVegetarian: "true",
    lowerLimit: 42,
    updatedAt: new Date(),
    upperLimit: 42,
  },
];
const FIND_ONE_RESULT = {
  addOnName: "exampleAddOnName",
  addOnPrice: 42.424242424,
  addonsImageUrl: "exampleAddonsImageUrl",
  containsEgg: "true",
  createdAt: new Date(),
  id: "exampleId",
  isVegetarian: "true",
  lowerLimit: 42,
  updatedAt: new Date(),
  upperLimit: 42,
};

const service = {
  createOptionsAddonsGroup() {
    return CREATE_RESULT;
  },
  optionsAddonsGroups: () => FIND_MANY_RESULT,
  optionsAddonsGroup: ({ where }: { where: { id: string } }) => {
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

describe("OptionsAddonsGroup", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: OptionsAddonsGroupService,
          useValue: service,
        },
      ],
      controllers: [OptionsAddonsGroupController],
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

  test("POST /optionsAddonsGroups", async () => {
    await request(app.getHttpServer())
      .post("/optionsAddonsGroups")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /optionsAddonsGroups", async () => {
    await request(app.getHttpServer())
      .get("/optionsAddonsGroups")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /optionsAddonsGroups/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/optionsAddonsGroups"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /optionsAddonsGroups/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/optionsAddonsGroups"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /optionsAddonsGroups existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/optionsAddonsGroups")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/optionsAddonsGroups")
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
