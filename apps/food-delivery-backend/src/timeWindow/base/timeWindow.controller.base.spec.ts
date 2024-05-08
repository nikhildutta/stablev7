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
import { TimeWindowController } from "../timeWindow.controller";
import { TimeWindowService } from "../timeWindow.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  windowEnd: new Date(),
  windowStart: new Date(),
};
const CREATE_RESULT = {
  id: "exampleId",
  windowEnd: new Date(),
  windowStart: new Date(),
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    windowEnd: new Date(),
    windowStart: new Date(),
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  windowEnd: new Date(),
  windowStart: new Date(),
};

const service = {
  createTimeWindow() {
    return CREATE_RESULT;
  },
  timeWindows: () => FIND_MANY_RESULT,
  timeWindow: ({ where }: { where: { id: string } }) => {
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

describe("TimeWindow", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TimeWindowService,
          useValue: service,
        },
      ],
      controllers: [TimeWindowController],
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

  test("POST /timeWindows", async () => {
    await request(app.getHttpServer())
      .post("/timeWindows")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        windowEnd: CREATE_RESULT.windowEnd.toISOString(),
        windowStart: CREATE_RESULT.windowStart.toISOString(),
      });
  });

  test("GET /timeWindows", async () => {
    await request(app.getHttpServer())
      .get("/timeWindows")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          windowEnd: FIND_MANY_RESULT[0].windowEnd.toISOString(),
          windowStart: FIND_MANY_RESULT[0].windowStart.toISOString(),
        },
      ]);
  });

  test("GET /timeWindows/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/timeWindows"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /timeWindows/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/timeWindows"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        windowEnd: FIND_ONE_RESULT.windowEnd.toISOString(),
        windowStart: FIND_ONE_RESULT.windowStart.toISOString(),
      });
  });

  test("POST /timeWindows existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/timeWindows")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        windowEnd: CREATE_RESULT.windowEnd.toISOString(),
        windowStart: CREATE_RESULT.windowStart.toISOString(),
      })
      .then(function () {
        agent
          .post("/timeWindows")
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
