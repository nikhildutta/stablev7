/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { SettlementsBreakupService } from "../settlementsBreakup.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SettlementsBreakupCreateInput } from "./SettlementsBreakupCreateInput";
import { SettlementsBreakup } from "./SettlementsBreakup";
import { SettlementsBreakupFindManyArgs } from "./SettlementsBreakupFindManyArgs";
import { SettlementsBreakupWhereUniqueInput } from "./SettlementsBreakupWhereUniqueInput";
import { SettlementsBreakupUpdateInput } from "./SettlementsBreakupUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SettlementsBreakupControllerBase {
  constructor(
    protected readonly service: SettlementsBreakupService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SettlementsBreakup })
  @nestAccessControl.UseRoles({
    resource: "SettlementsBreakup",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSettlementsBreakup(
    @common.Body() data: SettlementsBreakupCreateInput
  ): Promise<SettlementsBreakup> {
    return await this.service.createSettlementsBreakup({
      data: {
        ...data,

        appUsers: {
          connect: data.appUsers,
        },

        orderHistory: {
          connect: data.orderHistory,
        },

        payoutCycles: {
          connect: data.payoutCycles,
        },
      },
      select: {
        amountForGstUnder95: true,
        amountForTcs: true,

        appUsers: {
          select: {
            id: true,
          },
        },

        bankUtr: true,
        baseServiceFee: true,
        baseServiceFeePercentage: true,
        businessname: true,
        cancellationOrRejectionReason: true,
        cancellationOrRejectionState: true,
        cancellationPolicy: true,
        cashReceivedSelfDelivery: true,
        commissionableAmount: true,
        createdAt: true,
        creditDebitNoteAdjustment: true,
        customerCompensation: true,
        customerPayable: true,
        deliveryCharge: true,
        deliveryChargesRecovery: true,
        deliveryStateCode: true,
        discountConstruct: true,
        extraInventoryAds: true,
        fulfilmentFee: true,
        fulfilmentFeePerKm: true,
        gstPaidByPlatform: true,
        gstToBePaidByRestaurant: true,
        id: true,
        netAdditions: true,
        netDeductions: true,
        orderDateTime: true,
        orderDistanceKm: true,

        orderHistory: {
          select: {
            id: true,
          },
        },

        orderLevelPayout: true,
        orderStatus: true,
        orderType: true,
        packagingCharge: true,
        paymentMechanismFee: true,
        paymentMode: true,

        payoutCycles: {
          select: {
            id: true,
          },
        },

        promoRecoveryAdjustment: true,
        restaurantDiscountFromOthers: true,
        restaurantDiscountFromPromo: true,
        restaurantId: true,
        settlementDate: true,
        settlementStatus: true,
        subtotal: true,
        taxCollectedAtSource: true,
        taxesOnServicePaymentFees: true,
        tcsIgstAmount: true,
        tds194OAmount: true,
        totalGstFromCustomers: true,
        unsettledAmount: true,
        updatedAt: true,
        weekNo: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [SettlementsBreakup] })
  @ApiNestedQuery(SettlementsBreakupFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SettlementsBreakup",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async settlementsBreakups(
    @common.Req() request: Request
  ): Promise<SettlementsBreakup[]> {
    const args = plainToClass(SettlementsBreakupFindManyArgs, request.query);
    return this.service.settlementsBreakups({
      ...args,
      select: {
        amountForGstUnder95: true,
        amountForTcs: true,

        appUsers: {
          select: {
            id: true,
          },
        },

        bankUtr: true,
        baseServiceFee: true,
        baseServiceFeePercentage: true,
        businessname: true,
        cancellationOrRejectionReason: true,
        cancellationOrRejectionState: true,
        cancellationPolicy: true,
        cashReceivedSelfDelivery: true,
        commissionableAmount: true,
        createdAt: true,
        creditDebitNoteAdjustment: true,
        customerCompensation: true,
        customerPayable: true,
        deliveryCharge: true,
        deliveryChargesRecovery: true,
        deliveryStateCode: true,
        discountConstruct: true,
        extraInventoryAds: true,
        fulfilmentFee: true,
        fulfilmentFeePerKm: true,
        gstPaidByPlatform: true,
        gstToBePaidByRestaurant: true,
        id: true,
        netAdditions: true,
        netDeductions: true,
        orderDateTime: true,
        orderDistanceKm: true,

        orderHistory: {
          select: {
            id: true,
          },
        },

        orderLevelPayout: true,
        orderStatus: true,
        orderType: true,
        packagingCharge: true,
        paymentMechanismFee: true,
        paymentMode: true,

        payoutCycles: {
          select: {
            id: true,
          },
        },

        promoRecoveryAdjustment: true,
        restaurantDiscountFromOthers: true,
        restaurantDiscountFromPromo: true,
        restaurantId: true,
        settlementDate: true,
        settlementStatus: true,
        subtotal: true,
        taxCollectedAtSource: true,
        taxesOnServicePaymentFees: true,
        tcsIgstAmount: true,
        tds194OAmount: true,
        totalGstFromCustomers: true,
        unsettledAmount: true,
        updatedAt: true,
        weekNo: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SettlementsBreakup })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SettlementsBreakup",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async settlementsBreakup(
    @common.Param() params: SettlementsBreakupWhereUniqueInput
  ): Promise<SettlementsBreakup | null> {
    const result = await this.service.settlementsBreakup({
      where: params,
      select: {
        amountForGstUnder95: true,
        amountForTcs: true,

        appUsers: {
          select: {
            id: true,
          },
        },

        bankUtr: true,
        baseServiceFee: true,
        baseServiceFeePercentage: true,
        businessname: true,
        cancellationOrRejectionReason: true,
        cancellationOrRejectionState: true,
        cancellationPolicy: true,
        cashReceivedSelfDelivery: true,
        commissionableAmount: true,
        createdAt: true,
        creditDebitNoteAdjustment: true,
        customerCompensation: true,
        customerPayable: true,
        deliveryCharge: true,
        deliveryChargesRecovery: true,
        deliveryStateCode: true,
        discountConstruct: true,
        extraInventoryAds: true,
        fulfilmentFee: true,
        fulfilmentFeePerKm: true,
        gstPaidByPlatform: true,
        gstToBePaidByRestaurant: true,
        id: true,
        netAdditions: true,
        netDeductions: true,
        orderDateTime: true,
        orderDistanceKm: true,

        orderHistory: {
          select: {
            id: true,
          },
        },

        orderLevelPayout: true,
        orderStatus: true,
        orderType: true,
        packagingCharge: true,
        paymentMechanismFee: true,
        paymentMode: true,

        payoutCycles: {
          select: {
            id: true,
          },
        },

        promoRecoveryAdjustment: true,
        restaurantDiscountFromOthers: true,
        restaurantDiscountFromPromo: true,
        restaurantId: true,
        settlementDate: true,
        settlementStatus: true,
        subtotal: true,
        taxCollectedAtSource: true,
        taxesOnServicePaymentFees: true,
        tcsIgstAmount: true,
        tds194OAmount: true,
        totalGstFromCustomers: true,
        unsettledAmount: true,
        updatedAt: true,
        weekNo: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SettlementsBreakup })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SettlementsBreakup",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSettlementsBreakup(
    @common.Param() params: SettlementsBreakupWhereUniqueInput,
    @common.Body() data: SettlementsBreakupUpdateInput
  ): Promise<SettlementsBreakup | null> {
    try {
      return await this.service.updateSettlementsBreakup({
        where: params,
        data: {
          ...data,

          appUsers: {
            connect: data.appUsers,
          },

          orderHistory: {
            connect: data.orderHistory,
          },

          payoutCycles: {
            connect: data.payoutCycles,
          },
        },
        select: {
          amountForGstUnder95: true,
          amountForTcs: true,

          appUsers: {
            select: {
              id: true,
            },
          },

          bankUtr: true,
          baseServiceFee: true,
          baseServiceFeePercentage: true,
          businessname: true,
          cancellationOrRejectionReason: true,
          cancellationOrRejectionState: true,
          cancellationPolicy: true,
          cashReceivedSelfDelivery: true,
          commissionableAmount: true,
          createdAt: true,
          creditDebitNoteAdjustment: true,
          customerCompensation: true,
          customerPayable: true,
          deliveryCharge: true,
          deliveryChargesRecovery: true,
          deliveryStateCode: true,
          discountConstruct: true,
          extraInventoryAds: true,
          fulfilmentFee: true,
          fulfilmentFeePerKm: true,
          gstPaidByPlatform: true,
          gstToBePaidByRestaurant: true,
          id: true,
          netAdditions: true,
          netDeductions: true,
          orderDateTime: true,
          orderDistanceKm: true,

          orderHistory: {
            select: {
              id: true,
            },
          },

          orderLevelPayout: true,
          orderStatus: true,
          orderType: true,
          packagingCharge: true,
          paymentMechanismFee: true,
          paymentMode: true,

          payoutCycles: {
            select: {
              id: true,
            },
          },

          promoRecoveryAdjustment: true,
          restaurantDiscountFromOthers: true,
          restaurantDiscountFromPromo: true,
          restaurantId: true,
          settlementDate: true,
          settlementStatus: true,
          subtotal: true,
          taxCollectedAtSource: true,
          taxesOnServicePaymentFees: true,
          tcsIgstAmount: true,
          tds194OAmount: true,
          totalGstFromCustomers: true,
          unsettledAmount: true,
          updatedAt: true,
          weekNo: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: SettlementsBreakup })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SettlementsBreakup",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSettlementsBreakup(
    @common.Param() params: SettlementsBreakupWhereUniqueInput
  ): Promise<SettlementsBreakup | null> {
    try {
      return await this.service.deleteSettlementsBreakup({
        where: params,
        select: {
          amountForGstUnder95: true,
          amountForTcs: true,

          appUsers: {
            select: {
              id: true,
            },
          },

          bankUtr: true,
          baseServiceFee: true,
          baseServiceFeePercentage: true,
          businessname: true,
          cancellationOrRejectionReason: true,
          cancellationOrRejectionState: true,
          cancellationPolicy: true,
          cashReceivedSelfDelivery: true,
          commissionableAmount: true,
          createdAt: true,
          creditDebitNoteAdjustment: true,
          customerCompensation: true,
          customerPayable: true,
          deliveryCharge: true,
          deliveryChargesRecovery: true,
          deliveryStateCode: true,
          discountConstruct: true,
          extraInventoryAds: true,
          fulfilmentFee: true,
          fulfilmentFeePerKm: true,
          gstPaidByPlatform: true,
          gstToBePaidByRestaurant: true,
          id: true,
          netAdditions: true,
          netDeductions: true,
          orderDateTime: true,
          orderDistanceKm: true,

          orderHistory: {
            select: {
              id: true,
            },
          },

          orderLevelPayout: true,
          orderStatus: true,
          orderType: true,
          packagingCharge: true,
          paymentMechanismFee: true,
          paymentMode: true,

          payoutCycles: {
            select: {
              id: true,
            },
          },

          promoRecoveryAdjustment: true,
          restaurantDiscountFromOthers: true,
          restaurantDiscountFromPromo: true,
          restaurantId: true,
          settlementDate: true,
          settlementStatus: true,
          subtotal: true,
          taxCollectedAtSource: true,
          taxesOnServicePaymentFees: true,
          tcsIgstAmount: true,
          tds194OAmount: true,
          totalGstFromCustomers: true,
          unsettledAmount: true,
          updatedAt: true,
          weekNo: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}