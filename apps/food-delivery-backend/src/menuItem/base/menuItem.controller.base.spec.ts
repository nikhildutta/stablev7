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
import { MenuItemController } from "../menuItem.controller";
import { MenuItemService } from "../menuItem.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  availableQuantity: 42,
  basePrice: 42.424242424,
  containsEgg: "true",
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  imageUrl: "exampleImageUrl",
  ingredients: "exampleIngredients",
  isActive: "true",
  isDeliverable: "true",
  isDineinAvailable: "true",
  isLimitedStock: "true",
  isPickup: "true",
  isVegetarian: "true",
  name: "exampleName",
  preparationTime: 42,
  shareSlug: "exampleShareSlug",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  availableQuantity: 42,
  basePrice: 42.424242424,
  containsEgg: "true",
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  imageUrl: "exampleImageUrl",
  ingredients: "exampleIngredients",
  isActive: "true",
  isDeliverable: "true",
  isDineinAvailable: "true",
  isLimitedStock: "true",
  isPickup: "true",
  isVegetarian: "true",
  name: "exampleName",
  preparationTime: 42,
  shareSlug: "exampleShareSlug",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    availableQuantity: 42,
    basePrice: 42.424242424,
    containsEgg: "true",
    createdAt: new Date(),
    description: "exampleDescription",
    id: "exampleId",
    imageUrl: "exampleImageUrl",
    ingredients: "exampleIngredients",
    isActive: "true",
    isDeliverable: "true",
    isDineinAvailable: "true",
    isLimitedStock: "true",
    isPickup: "true",
    isVegetarian: "true",
    name: "exampleName",
    preparationTime: 42,
    shareSlug: "exampleShareSlug",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  availableQuantity: 42,
  basePrice: 42.424242424,
  containsEgg: "true",
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  imageUrl: "exampleImageUrl",
  ingredients: "exampleIngredients",
  isActive: "true",
  isDeliverable: "true",
  isDineinAvailable: "true",
  isLimitedStock: "true",
  isPickup: "true",
  isVegetarian: "true",
  name: "exampleName",
  preparationTime: 42,
  shareSlug: "exampleShareSlug",
  updatedAt: new Date(),
};

const service = {
  createMenuItem() {
    return CREATE_RESULT;
  },
  menuItems: () => FIND_MANY_RESULT,
  menuItem: ({ where }: { where: { id: string } }) => {
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

describe("MenuItem", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MenuItemService,
          useValue: service,
        },
      ],
      controllers: [MenuItemController],
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

  test("POST /menuItems", async () => {
    await request(app.getHttpServer())
      .post("/menuItems")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /menuItems", async () => {
    await request(app.getHttpServer())
      .get("/menuItems")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /menuItems/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/menuItems"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /menuItems/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/menuItems"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /menuItems existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/menuItems")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/menuItems")
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
