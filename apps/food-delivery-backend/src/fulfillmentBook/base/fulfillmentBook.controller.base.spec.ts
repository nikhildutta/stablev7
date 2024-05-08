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
import { FulfillmentBookController } from "../fulfillmentBook.controller";
import { FulfillmentBookService } from "../fulfillmentBook.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  acceptedOrderBy: "exampleAcceptedOrderBy",
  acceptedOrderStatus: "true",
  acceptedOrderStatusAt: new Date(),
  createdAt: new Date(),
  customerFulfillmentStatus: "true",
  customerFulfillmentStatusAt: new Date(),
  id: "exampleId",
  markedFulfilledBy: "exampleMarkedFulfilledBy",
  partnerPickupAt: new Date(),
  partnerPickupBy: "examplePartnerPickupBy",
  partnerPickupStatus: "true",
  readyForPickupBy: "exampleReadyForPickupBy",
  readyForPickupStatus: "true",
  readyForPickupStatusAt: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  acceptedOrderBy: "exampleAcceptedOrderBy",
  acceptedOrderStatus: "true",
  acceptedOrderStatusAt: new Date(),
  createdAt: new Date(),
  customerFulfillmentStatus: "true",
  customerFulfillmentStatusAt: new Date(),
  id: "exampleId",
  markedFulfilledBy: "exampleMarkedFulfilledBy",
  partnerPickupAt: new Date(),
  partnerPickupBy: "examplePartnerPickupBy",
  partnerPickupStatus: "true",
  readyForPickupBy: "exampleReadyForPickupBy",
  readyForPickupStatus: "true",
  readyForPickupStatusAt: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    acceptedOrderBy: "exampleAcceptedOrderBy",
    acceptedOrderStatus: "true",
    acceptedOrderStatusAt: new Date(),
    createdAt: new Date(),
    customerFulfillmentStatus: "true",
    customerFulfillmentStatusAt: new Date(),
    id: "exampleId",
    markedFulfilledBy: "exampleMarkedFulfilledBy",
    partnerPickupAt: new Date(),
    partnerPickupBy: "examplePartnerPickupBy",
    partnerPickupStatus: "true",
    readyForPickupBy: "exampleReadyForPickupBy",
    readyForPickupStatus: "true",
    readyForPickupStatusAt: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  acceptedOrderBy: "exampleAcceptedOrderBy",
  acceptedOrderStatus: "true",
  acceptedOrderStatusAt: new Date(),
  createdAt: new Date(),
  customerFulfillmentStatus: "true",
  customerFulfillmentStatusAt: new Date(),
  id: "exampleId",
  markedFulfilledBy: "exampleMarkedFulfilledBy",
  partnerPickupAt: new Date(),
  partnerPickupBy: "examplePartnerPickupBy",
  partnerPickupStatus: "true",
  readyForPickupBy: "exampleReadyForPickupBy",
  readyForPickupStatus: "true",
  readyForPickupStatusAt: new Date(),
  updatedAt: new Date(),
};

const service = {
  createFulfillmentBook() {
    return CREATE_RESULT;
  },
  fulfillmentBooks: () => FIND_MANY_RESULT,
  fulfillmentBook: ({ where }: { where: { id: string } }) => {
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

describe("FulfillmentBook", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: FulfillmentBookService,
          useValue: service,
        },
      ],
      controllers: [FulfillmentBookController],
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

  test("POST /fulfillmentBooks", async () => {
    await request(app.getHttpServer())
      .post("/fulfillmentBooks")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        acceptedOrderStatusAt:
          CREATE_RESULT.acceptedOrderStatusAt.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        customerFulfillmentStatusAt:
          CREATE_RESULT.customerFulfillmentStatusAt.toISOString(),
        partnerPickupAt: CREATE_RESULT.partnerPickupAt.toISOString(),
        readyForPickupStatusAt:
          CREATE_RESULT.readyForPickupStatusAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /fulfillmentBooks", async () => {
    await request(app.getHttpServer())
      .get("/fulfillmentBooks")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          acceptedOrderStatusAt:
            FIND_MANY_RESULT[0].acceptedOrderStatusAt.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          customerFulfillmentStatusAt:
            FIND_MANY_RESULT[0].customerFulfillmentStatusAt.toISOString(),
          partnerPickupAt: FIND_MANY_RESULT[0].partnerPickupAt.toISOString(),
          readyForPickupStatusAt:
            FIND_MANY_RESULT[0].readyForPickupStatusAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /fulfillmentBooks/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/fulfillmentBooks"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /fulfillmentBooks/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/fulfillmentBooks"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        acceptedOrderStatusAt:
          FIND_ONE_RESULT.acceptedOrderStatusAt.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        customerFulfillmentStatusAt:
          FIND_ONE_RESULT.customerFulfillmentStatusAt.toISOString(),
        partnerPickupAt: FIND_ONE_RESULT.partnerPickupAt.toISOString(),
        readyForPickupStatusAt:
          FIND_ONE_RESULT.readyForPickupStatusAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /fulfillmentBooks existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/fulfillmentBooks")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        acceptedOrderStatusAt:
          CREATE_RESULT.acceptedOrderStatusAt.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        customerFulfillmentStatusAt:
          CREATE_RESULT.customerFulfillmentStatusAt.toISOString(),
        partnerPickupAt: CREATE_RESULT.partnerPickupAt.toISOString(),
        readyForPickupStatusAt:
          CREATE_RESULT.readyForPickupStatusAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/fulfillmentBooks")
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
