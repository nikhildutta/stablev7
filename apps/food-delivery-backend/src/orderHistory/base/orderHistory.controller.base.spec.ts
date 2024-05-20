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
import { OrderHistoryController } from "../orderHistory.controller";
import { OrderHistoryService } from "../orderHistory.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  deliveryTipsAmount: 42.424242424,
  discountAmount: 42.424242424,
  estimatedDeliveryTime: new Date(),
  finalAmount: 42.424242424,
  id: "exampleId",
  isCancelled: "true",
  isFulfilled: "true",
  isPaid: "true",
  isRejected: "true",
  orderDateTime: new Date(),
  orderIdRef: 42,
  packagingAmount: 42.424242424,
  preparationInstruction: "examplePreparationInstruction",
  preparationTime: 42,
  rejectedBy: "exampleRejectedBy",
  totalAmount: 42.424242424,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  deliveryTipsAmount: 42.424242424,
  discountAmount: 42.424242424,
  estimatedDeliveryTime: new Date(),
  finalAmount: 42.424242424,
  id: "exampleId",
  isCancelled: "true",
  isFulfilled: "true",
  isPaid: "true",
  isRejected: "true",
  orderDateTime: new Date(),
  orderIdRef: 42,
  packagingAmount: 42.424242424,
  preparationInstruction: "examplePreparationInstruction",
  preparationTime: 42,
  rejectedBy: "exampleRejectedBy",
  totalAmount: 42.424242424,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    deliveryTipsAmount: 42.424242424,
    discountAmount: 42.424242424,
    estimatedDeliveryTime: new Date(),
    finalAmount: 42.424242424,
    id: "exampleId",
    isCancelled: "true",
    isFulfilled: "true",
    isPaid: "true",
    isRejected: "true",
    orderDateTime: new Date(),
    orderIdRef: 42,
    packagingAmount: 42.424242424,
    preparationInstruction: "examplePreparationInstruction",
    preparationTime: 42,
    rejectedBy: "exampleRejectedBy",
    totalAmount: 42.424242424,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  deliveryTipsAmount: 42.424242424,
  discountAmount: 42.424242424,
  estimatedDeliveryTime: new Date(),
  finalAmount: 42.424242424,
  id: "exampleId",
  isCancelled: "true",
  isFulfilled: "true",
  isPaid: "true",
  isRejected: "true",
  orderDateTime: new Date(),
  orderIdRef: 42,
  packagingAmount: 42.424242424,
  preparationInstruction: "examplePreparationInstruction",
  preparationTime: 42,
  rejectedBy: "exampleRejectedBy",
  totalAmount: 42.424242424,
  updatedAt: new Date(),
};

const service = {
  createOrderHistory() {
    return CREATE_RESULT;
  },
  orderHistories: () => FIND_MANY_RESULT,
  orderHistory: ({ where }: { where: { id: string } }) => {
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

describe("OrderHistory", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: OrderHistoryService,
          useValue: service,
        },
      ],
      controllers: [OrderHistoryController],
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

  test("POST /orderHistories", async () => {
    await request(app.getHttpServer())
      .post("/orderHistories")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        estimatedDeliveryTime:
          CREATE_RESULT.estimatedDeliveryTime.toISOString(),
        orderDateTime: CREATE_RESULT.orderDateTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /orderHistories", async () => {
    await request(app.getHttpServer())
      .get("/orderHistories")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          estimatedDeliveryTime:
            FIND_MANY_RESULT[0].estimatedDeliveryTime.toISOString(),
          orderDateTime: FIND_MANY_RESULT[0].orderDateTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /orderHistories/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/orderHistories"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /orderHistories/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/orderHistories"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        estimatedDeliveryTime:
          FIND_ONE_RESULT.estimatedDeliveryTime.toISOString(),
        orderDateTime: FIND_ONE_RESULT.orderDateTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /orderHistories existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/orderHistories")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        estimatedDeliveryTime:
          CREATE_RESULT.estimatedDeliveryTime.toISOString(),
        orderDateTime: CREATE_RESULT.orderDateTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/orderHistories")
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
