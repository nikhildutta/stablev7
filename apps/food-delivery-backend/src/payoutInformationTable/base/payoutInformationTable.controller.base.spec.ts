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
import { PayoutInformationTableController } from "../payoutInformationTable.controller";
import { PayoutInformationTableService } from "../payoutInformationTable.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  bankAccountNumber: "exampleBankAccountNumber",
  bankIfscCode: "exampleBankIfscCode",
  createdAt: new Date(),
  firstPayoutDate: new Date(),
  id: "exampleId",
  isBankAccountVerified: "true",
  panNumber: "examplePanNumber",
  payoutCycleLength: 42,
  payoutDateOffset: 42,
  tanNumber: "exampleTanNumber",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  bankAccountNumber: "exampleBankAccountNumber",
  bankIfscCode: "exampleBankIfscCode",
  createdAt: new Date(),
  firstPayoutDate: new Date(),
  id: "exampleId",
  isBankAccountVerified: "true",
  panNumber: "examplePanNumber",
  payoutCycleLength: 42,
  payoutDateOffset: 42,
  tanNumber: "exampleTanNumber",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    bankAccountNumber: "exampleBankAccountNumber",
    bankIfscCode: "exampleBankIfscCode",
    createdAt: new Date(),
    firstPayoutDate: new Date(),
    id: "exampleId",
    isBankAccountVerified: "true",
    panNumber: "examplePanNumber",
    payoutCycleLength: 42,
    payoutDateOffset: 42,
    tanNumber: "exampleTanNumber",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  bankAccountNumber: "exampleBankAccountNumber",
  bankIfscCode: "exampleBankIfscCode",
  createdAt: new Date(),
  firstPayoutDate: new Date(),
  id: "exampleId",
  isBankAccountVerified: "true",
  panNumber: "examplePanNumber",
  payoutCycleLength: 42,
  payoutDateOffset: 42,
  tanNumber: "exampleTanNumber",
  updatedAt: new Date(),
};

const service = {
  createPayoutInformationTable() {
    return CREATE_RESULT;
  },
  payoutInformationTables: () => FIND_MANY_RESULT,
  payoutInformationTable: ({ where }: { where: { id: string } }) => {
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

describe("PayoutInformationTable", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PayoutInformationTableService,
          useValue: service,
        },
      ],
      controllers: [PayoutInformationTableController],
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

  test("POST /payoutInformationTables", async () => {
    await request(app.getHttpServer())
      .post("/payoutInformationTables")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        firstPayoutDate: CREATE_RESULT.firstPayoutDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /payoutInformationTables", async () => {
    await request(app.getHttpServer())
      .get("/payoutInformationTables")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          firstPayoutDate: FIND_MANY_RESULT[0].firstPayoutDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /payoutInformationTables/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/payoutInformationTables"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /payoutInformationTables/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/payoutInformationTables"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        firstPayoutDate: FIND_ONE_RESULT.firstPayoutDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /payoutInformationTables existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/payoutInformationTables")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        firstPayoutDate: CREATE_RESULT.firstPayoutDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/payoutInformationTables")
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
