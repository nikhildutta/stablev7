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
import { ReservationController } from "../reservation.controller";
import { ReservationService } from "../reservation.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  id: "exampleId",
  partySize: 42,
  reservationDate: new Date(),
  reservationTime: new Date(),
  status: "exampleStatus",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  id: "exampleId",
  partySize: 42,
  reservationDate: new Date(),
  reservationTime: new Date(),
  status: "exampleStatus",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    id: "exampleId",
    partySize: 42,
    reservationDate: new Date(),
    reservationTime: new Date(),
    status: "exampleStatus",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  id: "exampleId",
  partySize: 42,
  reservationDate: new Date(),
  reservationTime: new Date(),
  status: "exampleStatus",
  updatedAt: new Date(),
};

const service = {
  createReservation() {
    return CREATE_RESULT;
  },
  reservations: () => FIND_MANY_RESULT,
  reservation: ({ where }: { where: { id: string } }) => {
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

describe("Reservation", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ReservationService,
          useValue: service,
        },
      ],
      controllers: [ReservationController],
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

  test("POST /reservations", async () => {
    await request(app.getHttpServer())
      .post("/reservations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        reservationDate: CREATE_RESULT.reservationDate.toISOString(),
        reservationTime: CREATE_RESULT.reservationTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /reservations", async () => {
    await request(app.getHttpServer())
      .get("/reservations")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          reservationDate: FIND_MANY_RESULT[0].reservationDate.toISOString(),
          reservationTime: FIND_MANY_RESULT[0].reservationTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /reservations/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/reservations"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /reservations/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/reservations"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        reservationDate: FIND_ONE_RESULT.reservationDate.toISOString(),
        reservationTime: FIND_ONE_RESULT.reservationTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /reservations existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/reservations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        reservationDate: CREATE_RESULT.reservationDate.toISOString(),
        reservationTime: CREATE_RESULT.reservationTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/reservations")
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
