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
import { SsoLookupController } from "../ssoLookup.controller";
import { SsoLookupService } from "../ssoLookup.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  appleEmail: "exampleAppleEmail",
  appleFamilyName: "exampleAppleFamilyName",
  appleGivenName: "exampleAppleGivenName",
  appleRefreshToken: "exampleAppleRefreshToken",
  appleTokenExpiresAt: new Date(),
  appleUserId: "exampleAppleUserId",
  createdAt: new Date(),
  facebookAccessToken: "exampleFacebookAccessToken",
  facebookEmail: "exampleFacebookEmail",
  facebookName: "exampleFacebookName",
  facebookTokenExpiresAt: new Date(),
  facebookUserId: "exampleFacebookUserId",
  googleEmail: "exampleGoogleEmail",
  googleFamilyName: "exampleGoogleFamilyName",
  googleGivenName: "exampleGoogleGivenName",
  googleRefreshToken: "exampleGoogleRefreshToken",
  googleTokenExpiresAt: new Date(),
  googleUserId: "exampleGoogleUserId",
  id: "exampleId",
  twitterAccessToken: "exampleTwitterAccessToken",
  twitterHandle: "exampleTwitterHandle",
  twitterTokenSecret: "exampleTwitterTokenSecret",
  twitterUserId: "exampleTwitterUserId",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  appleEmail: "exampleAppleEmail",
  appleFamilyName: "exampleAppleFamilyName",
  appleGivenName: "exampleAppleGivenName",
  appleRefreshToken: "exampleAppleRefreshToken",
  appleTokenExpiresAt: new Date(),
  appleUserId: "exampleAppleUserId",
  createdAt: new Date(),
  facebookAccessToken: "exampleFacebookAccessToken",
  facebookEmail: "exampleFacebookEmail",
  facebookName: "exampleFacebookName",
  facebookTokenExpiresAt: new Date(),
  facebookUserId: "exampleFacebookUserId",
  googleEmail: "exampleGoogleEmail",
  googleFamilyName: "exampleGoogleFamilyName",
  googleGivenName: "exampleGoogleGivenName",
  googleRefreshToken: "exampleGoogleRefreshToken",
  googleTokenExpiresAt: new Date(),
  googleUserId: "exampleGoogleUserId",
  id: "exampleId",
  twitterAccessToken: "exampleTwitterAccessToken",
  twitterHandle: "exampleTwitterHandle",
  twitterTokenSecret: "exampleTwitterTokenSecret",
  twitterUserId: "exampleTwitterUserId",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    appleEmail: "exampleAppleEmail",
    appleFamilyName: "exampleAppleFamilyName",
    appleGivenName: "exampleAppleGivenName",
    appleRefreshToken: "exampleAppleRefreshToken",
    appleTokenExpiresAt: new Date(),
    appleUserId: "exampleAppleUserId",
    createdAt: new Date(),
    facebookAccessToken: "exampleFacebookAccessToken",
    facebookEmail: "exampleFacebookEmail",
    facebookName: "exampleFacebookName",
    facebookTokenExpiresAt: new Date(),
    facebookUserId: "exampleFacebookUserId",
    googleEmail: "exampleGoogleEmail",
    googleFamilyName: "exampleGoogleFamilyName",
    googleGivenName: "exampleGoogleGivenName",
    googleRefreshToken: "exampleGoogleRefreshToken",
    googleTokenExpiresAt: new Date(),
    googleUserId: "exampleGoogleUserId",
    id: "exampleId",
    twitterAccessToken: "exampleTwitterAccessToken",
    twitterHandle: "exampleTwitterHandle",
    twitterTokenSecret: "exampleTwitterTokenSecret",
    twitterUserId: "exampleTwitterUserId",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  appleEmail: "exampleAppleEmail",
  appleFamilyName: "exampleAppleFamilyName",
  appleGivenName: "exampleAppleGivenName",
  appleRefreshToken: "exampleAppleRefreshToken",
  appleTokenExpiresAt: new Date(),
  appleUserId: "exampleAppleUserId",
  createdAt: new Date(),
  facebookAccessToken: "exampleFacebookAccessToken",
  facebookEmail: "exampleFacebookEmail",
  facebookName: "exampleFacebookName",
  facebookTokenExpiresAt: new Date(),
  facebookUserId: "exampleFacebookUserId",
  googleEmail: "exampleGoogleEmail",
  googleFamilyName: "exampleGoogleFamilyName",
  googleGivenName: "exampleGoogleGivenName",
  googleRefreshToken: "exampleGoogleRefreshToken",
  googleTokenExpiresAt: new Date(),
  googleUserId: "exampleGoogleUserId",
  id: "exampleId",
  twitterAccessToken: "exampleTwitterAccessToken",
  twitterHandle: "exampleTwitterHandle",
  twitterTokenSecret: "exampleTwitterTokenSecret",
  twitterUserId: "exampleTwitterUserId",
  updatedAt: new Date(),
};

const service = {
  createSsoLookup() {
    return CREATE_RESULT;
  },
  ssoLookups: () => FIND_MANY_RESULT,
  ssoLookup: ({ where }: { where: { id: string } }) => {
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

describe("SsoLookup", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SsoLookupService,
          useValue: service,
        },
      ],
      controllers: [SsoLookupController],
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

  test("POST /ssoLookups", async () => {
    await request(app.getHttpServer())
      .post("/ssoLookups")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        appleTokenExpiresAt: CREATE_RESULT.appleTokenExpiresAt.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        facebookTokenExpiresAt:
          CREATE_RESULT.facebookTokenExpiresAt.toISOString(),
        googleTokenExpiresAt: CREATE_RESULT.googleTokenExpiresAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /ssoLookups", async () => {
    await request(app.getHttpServer())
      .get("/ssoLookups")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          appleTokenExpiresAt:
            FIND_MANY_RESULT[0].appleTokenExpiresAt.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          facebookTokenExpiresAt:
            FIND_MANY_RESULT[0].facebookTokenExpiresAt.toISOString(),
          googleTokenExpiresAt:
            FIND_MANY_RESULT[0].googleTokenExpiresAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /ssoLookups/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/ssoLookups"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /ssoLookups/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/ssoLookups"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        appleTokenExpiresAt: FIND_ONE_RESULT.appleTokenExpiresAt.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        facebookTokenExpiresAt:
          FIND_ONE_RESULT.facebookTokenExpiresAt.toISOString(),
        googleTokenExpiresAt:
          FIND_ONE_RESULT.googleTokenExpiresAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /ssoLookups existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/ssoLookups")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        appleTokenExpiresAt: CREATE_RESULT.appleTokenExpiresAt.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        facebookTokenExpiresAt:
          CREATE_RESULT.facebookTokenExpiresAt.toISOString(),
        googleTokenExpiresAt: CREATE_RESULT.googleTokenExpiresAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/ssoLookups")
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
