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
import { PayoutCycleController } from "../payoutCycle.controller";
import { PayoutCycleService } from "../payoutCycle.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  id: "exampleId",
  netPayout: 42.424242424,
  numberOfOrders: 42,
  timePeriodEnd: new Date(),
  timePeriodStart: new Date(),
  updatedAt: new Date(),
  utrNumber: "exampleUtrNumber",
  weekNumber: 42,
};
const CREATE_RESULT = {
  createdAt: new Date(),
  id: "exampleId",
  netPayout: 42.424242424,
  numberOfOrders: 42,
  timePeriodEnd: new Date(),
  timePeriodStart: new Date(),
  updatedAt: new Date(),
  utrNumber: "exampleUtrNumber",
  weekNumber: 42,
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    id: "exampleId",
    netPayout: 42.424242424,
    numberOfOrders: 42,
    timePeriodEnd: new Date(),
    timePeriodStart: new Date(),
    updatedAt: new Date(),
    utrNumber: "exampleUtrNumber",
    weekNumber: 42,
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  id: "exampleId",
  netPayout: 42.424242424,
  numberOfOrders: 42,
  timePeriodEnd: new Date(),
  timePeriodStart: new Date(),
  updatedAt: new Date(),
  utrNumber: "exampleUtrNumber",
  weekNumber: 42,
};

const service = {
  createPayoutCycle() {
    return CREATE_RESULT;
  },
  payoutCycles: () => FIND_MANY_RESULT,
  payoutCycle: ({ where }: { where: { id: string } }) => {
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

describe("PayoutCycle", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PayoutCycleService,
          useValue: service,
        },
      ],
      controllers: [PayoutCycleController],
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

  test("POST /payoutCycles", async () => {
    await request(app.getHttpServer())
      .post("/payoutCycles")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        timePeriodEnd: CREATE_RESULT.timePeriodEnd.toISOString(),
        timePeriodStart: CREATE_RESULT.timePeriodStart.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /payoutCycles", async () => {
    await request(app.getHttpServer())
      .get("/payoutCycles")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          timePeriodEnd: FIND_MANY_RESULT[0].timePeriodEnd.toISOString(),
          timePeriodStart: FIND_MANY_RESULT[0].timePeriodStart.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /payoutCycles/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/payoutCycles"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /payoutCycles/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/payoutCycles"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        timePeriodEnd: FIND_ONE_RESULT.timePeriodEnd.toISOString(),
        timePeriodStart: FIND_ONE_RESULT.timePeriodStart.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /payoutCycles existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/payoutCycles")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        timePeriodEnd: CREATE_RESULT.timePeriodEnd.toISOString(),
        timePeriodStart: CREATE_RESULT.timePeriodStart.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/payoutCycles")
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
