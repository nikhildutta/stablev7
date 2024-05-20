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
import { SettlementsBreakupController } from "../settlementsBreakup.controller";
import { SettlementsBreakupService } from "../settlementsBreakup.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amountForGstUnder95: 42.424242424,
  amountForTcs: 42.424242424,
  bankUtr: "exampleBankUtr",
  baseServiceFee: 42.424242424,
  baseServiceFeePercentage: 42.424242424,
  businessname: "exampleBusinessname",
  cancellationOrRejectionReason: "exampleCancellationOrRejectionReason",
  cancellationOrRejectionState: "exampleCancellationOrRejectionState",
  cancellationPolicy: "exampleCancellationPolicy",
  cashReceivedSelfDelivery: 42.424242424,
  commissionableAmount: 42.424242424,
  createdAt: new Date(),
  creditDebitNoteAdjustment: 42.424242424,
  customerCompensation: 42.424242424,
  customerPayable: 42.424242424,
  deliveryCharge: 42.424242424,
  deliveryChargesRecovery: 42.424242424,
  deliveryStateCode: "exampleDeliveryStateCode",
  discountConstruct: "exampleDiscountConstruct",
  extraInventoryAds: 42.424242424,
  fulfilmentFee: 42.424242424,
  fulfilmentFeePerKm: 42.424242424,
  gstPaidByPlatform: 42.424242424,
  gstToBePaidByRestaurant: 42.424242424,
  id: "exampleId",
  netAdditions: 42.424242424,
  netDeductions: 42.424242424,
  orderDateTime: new Date(),
  orderDistanceKm: 42.424242424,
  orderLevelPayout: 42.424242424,
  orderStatus: "exampleOrderStatus",
  orderType: "exampleOrderType",
  packagingCharge: 42.424242424,
  paymentMechanismFee: 42.424242424,
  paymentMode: "examplePaymentMode",
  promoRecoveryAdjustment: 42.424242424,
  restaurantDiscountFromOthers: 42.424242424,
  restaurantDiscountFromPromo: 42.424242424,
  restaurantId: "exampleRestaurantId",
  settlementDate: new Date(),
  settlementStatus: "exampleSettlementStatus",
  subtotal: 42.424242424,
  taxCollectedAtSource: 42.424242424,
  taxesOnServicePaymentFees: 42.424242424,
  tcsIgstAmount: 42.424242424,
  tds194OAmount: 42.424242424,
  totalGstFromCustomers: 42.424242424,
  unsettledAmount: 42.424242424,
  updatedAt: new Date(),
  weekNo: 42,
};
const CREATE_RESULT = {
  amountForGstUnder95: 42.424242424,
  amountForTcs: 42.424242424,
  bankUtr: "exampleBankUtr",
  baseServiceFee: 42.424242424,
  baseServiceFeePercentage: 42.424242424,
  businessname: "exampleBusinessname",
  cancellationOrRejectionReason: "exampleCancellationOrRejectionReason",
  cancellationOrRejectionState: "exampleCancellationOrRejectionState",
  cancellationPolicy: "exampleCancellationPolicy",
  cashReceivedSelfDelivery: 42.424242424,
  commissionableAmount: 42.424242424,
  createdAt: new Date(),
  creditDebitNoteAdjustment: 42.424242424,
  customerCompensation: 42.424242424,
  customerPayable: 42.424242424,
  deliveryCharge: 42.424242424,
  deliveryChargesRecovery: 42.424242424,
  deliveryStateCode: "exampleDeliveryStateCode",
  discountConstruct: "exampleDiscountConstruct",
  extraInventoryAds: 42.424242424,
  fulfilmentFee: 42.424242424,
  fulfilmentFeePerKm: 42.424242424,
  gstPaidByPlatform: 42.424242424,
  gstToBePaidByRestaurant: 42.424242424,
  id: "exampleId",
  netAdditions: 42.424242424,
  netDeductions: 42.424242424,
  orderDateTime: new Date(),
  orderDistanceKm: 42.424242424,
  orderLevelPayout: 42.424242424,
  orderStatus: "exampleOrderStatus",
  orderType: "exampleOrderType",
  packagingCharge: 42.424242424,
  paymentMechanismFee: 42.424242424,
  paymentMode: "examplePaymentMode",
  promoRecoveryAdjustment: 42.424242424,
  restaurantDiscountFromOthers: 42.424242424,
  restaurantDiscountFromPromo: 42.424242424,
  restaurantId: "exampleRestaurantId",
  settlementDate: new Date(),
  settlementStatus: "exampleSettlementStatus",
  subtotal: 42.424242424,
  taxCollectedAtSource: 42.424242424,
  taxesOnServicePaymentFees: 42.424242424,
  tcsIgstAmount: 42.424242424,
  tds194OAmount: 42.424242424,
  totalGstFromCustomers: 42.424242424,
  unsettledAmount: 42.424242424,
  updatedAt: new Date(),
  weekNo: 42,
};
const FIND_MANY_RESULT = [
  {
    amountForGstUnder95: 42.424242424,
    amountForTcs: 42.424242424,
    bankUtr: "exampleBankUtr",
    baseServiceFee: 42.424242424,
    baseServiceFeePercentage: 42.424242424,
    businessname: "exampleBusinessname",
    cancellationOrRejectionReason: "exampleCancellationOrRejectionReason",
    cancellationOrRejectionState: "exampleCancellationOrRejectionState",
    cancellationPolicy: "exampleCancellationPolicy",
    cashReceivedSelfDelivery: 42.424242424,
    commissionableAmount: 42.424242424,
    createdAt: new Date(),
    creditDebitNoteAdjustment: 42.424242424,
    customerCompensation: 42.424242424,
    customerPayable: 42.424242424,
    deliveryCharge: 42.424242424,
    deliveryChargesRecovery: 42.424242424,
    deliveryStateCode: "exampleDeliveryStateCode",
    discountConstruct: "exampleDiscountConstruct",
    extraInventoryAds: 42.424242424,
    fulfilmentFee: 42.424242424,
    fulfilmentFeePerKm: 42.424242424,
    gstPaidByPlatform: 42.424242424,
    gstToBePaidByRestaurant: 42.424242424,
    id: "exampleId",
    netAdditions: 42.424242424,
    netDeductions: 42.424242424,
    orderDateTime: new Date(),
    orderDistanceKm: 42.424242424,
    orderLevelPayout: 42.424242424,
    orderStatus: "exampleOrderStatus",
    orderType: "exampleOrderType",
    packagingCharge: 42.424242424,
    paymentMechanismFee: 42.424242424,
    paymentMode: "examplePaymentMode",
    promoRecoveryAdjustment: 42.424242424,
    restaurantDiscountFromOthers: 42.424242424,
    restaurantDiscountFromPromo: 42.424242424,
    restaurantId: "exampleRestaurantId",
    settlementDate: new Date(),
    settlementStatus: "exampleSettlementStatus",
    subtotal: 42.424242424,
    taxCollectedAtSource: 42.424242424,
    taxesOnServicePaymentFees: 42.424242424,
    tcsIgstAmount: 42.424242424,
    tds194OAmount: 42.424242424,
    totalGstFromCustomers: 42.424242424,
    unsettledAmount: 42.424242424,
    updatedAt: new Date(),
    weekNo: 42,
  },
];
const FIND_ONE_RESULT = {
  amountForGstUnder95: 42.424242424,
  amountForTcs: 42.424242424,
  bankUtr: "exampleBankUtr",
  baseServiceFee: 42.424242424,
  baseServiceFeePercentage: 42.424242424,
  businessname: "exampleBusinessname",
  cancellationOrRejectionReason: "exampleCancellationOrRejectionReason",
  cancellationOrRejectionState: "exampleCancellationOrRejectionState",
  cancellationPolicy: "exampleCancellationPolicy",
  cashReceivedSelfDelivery: 42.424242424,
  commissionableAmount: 42.424242424,
  createdAt: new Date(),
  creditDebitNoteAdjustment: 42.424242424,
  customerCompensation: 42.424242424,
  customerPayable: 42.424242424,
  deliveryCharge: 42.424242424,
  deliveryChargesRecovery: 42.424242424,
  deliveryStateCode: "exampleDeliveryStateCode",
  discountConstruct: "exampleDiscountConstruct",
  extraInventoryAds: 42.424242424,
  fulfilmentFee: 42.424242424,
  fulfilmentFeePerKm: 42.424242424,
  gstPaidByPlatform: 42.424242424,
  gstToBePaidByRestaurant: 42.424242424,
  id: "exampleId",
  netAdditions: 42.424242424,
  netDeductions: 42.424242424,
  orderDateTime: new Date(),
  orderDistanceKm: 42.424242424,
  orderLevelPayout: 42.424242424,
  orderStatus: "exampleOrderStatus",
  orderType: "exampleOrderType",
  packagingCharge: 42.424242424,
  paymentMechanismFee: 42.424242424,
  paymentMode: "examplePaymentMode",
  promoRecoveryAdjustment: 42.424242424,
  restaurantDiscountFromOthers: 42.424242424,
  restaurantDiscountFromPromo: 42.424242424,
  restaurantId: "exampleRestaurantId",
  settlementDate: new Date(),
  settlementStatus: "exampleSettlementStatus",
  subtotal: 42.424242424,
  taxCollectedAtSource: 42.424242424,
  taxesOnServicePaymentFees: 42.424242424,
  tcsIgstAmount: 42.424242424,
  tds194OAmount: 42.424242424,
  totalGstFromCustomers: 42.424242424,
  unsettledAmount: 42.424242424,
  updatedAt: new Date(),
  weekNo: 42,
};

const service = {
  createSettlementsBreakup() {
    return CREATE_RESULT;
  },
  settlementsBreakups: () => FIND_MANY_RESULT,
  settlementsBreakup: ({ where }: { where: { id: string } }) => {
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

describe("SettlementsBreakup", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SettlementsBreakupService,
          useValue: service,
        },
      ],
      controllers: [SettlementsBreakupController],
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

  test("POST /settlementsBreakups", async () => {
    await request(app.getHttpServer())
      .post("/settlementsBreakups")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        orderDateTime: CREATE_RESULT.orderDateTime.toISOString(),
        settlementDate: CREATE_RESULT.settlementDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /settlementsBreakups", async () => {
    await request(app.getHttpServer())
      .get("/settlementsBreakups")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          orderDateTime: FIND_MANY_RESULT[0].orderDateTime.toISOString(),
          settlementDate: FIND_MANY_RESULT[0].settlementDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /settlementsBreakups/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/settlementsBreakups"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /settlementsBreakups/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/settlementsBreakups"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        orderDateTime: FIND_ONE_RESULT.orderDateTime.toISOString(),
        settlementDate: FIND_ONE_RESULT.settlementDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /settlementsBreakups existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/settlementsBreakups")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        orderDateTime: CREATE_RESULT.orderDateTime.toISOString(),
        settlementDate: CREATE_RESULT.settlementDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/settlementsBreakups")
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
