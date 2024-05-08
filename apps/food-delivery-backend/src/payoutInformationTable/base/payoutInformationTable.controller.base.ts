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
import { PayoutInformationTableService } from "../payoutInformationTable.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PayoutInformationTableCreateInput } from "./PayoutInformationTableCreateInput";
import { PayoutInformationTable } from "./PayoutInformationTable";
import { PayoutInformationTableFindManyArgs } from "./PayoutInformationTableFindManyArgs";
import { PayoutInformationTableWhereUniqueInput } from "./PayoutInformationTableWhereUniqueInput";
import { PayoutInformationTableUpdateInput } from "./PayoutInformationTableUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PayoutInformationTableControllerBase {
  constructor(
    protected readonly service: PayoutInformationTableService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PayoutInformationTable })
  @nestAccessControl.UseRoles({
    resource: "PayoutInformationTable",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPayoutInformationTable(
    @common.Body() data: PayoutInformationTableCreateInput
  ): Promise<PayoutInformationTable> {
    return await this.service.createPayoutInformationTable({
      data: {
        ...data,

        restaurants: {
          connect: data.restaurants,
        },
      },
      select: {
        bankAccountNumber: true,
        bankIfscCode: true,
        createdAt: true,
        firstPayoutDate: true,
        id: true,
        isBankAccountVerified: true,
        panNumber: true,
        payoutCycleLength: true,
        payoutDateOffset: true,

        restaurants: {
          select: {
            id: true,
          },
        },

        tanNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [PayoutInformationTable] })
  @ApiNestedQuery(PayoutInformationTableFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PayoutInformationTable",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async payoutInformationTables(
    @common.Req() request: Request
  ): Promise<PayoutInformationTable[]> {
    const args = plainToClass(
      PayoutInformationTableFindManyArgs,
      request.query
    );
    return this.service.payoutInformationTables({
      ...args,
      select: {
        bankAccountNumber: true,
        bankIfscCode: true,
        createdAt: true,
        firstPayoutDate: true,
        id: true,
        isBankAccountVerified: true,
        panNumber: true,
        payoutCycleLength: true,
        payoutDateOffset: true,

        restaurants: {
          select: {
            id: true,
          },
        },

        tanNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PayoutInformationTable })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PayoutInformationTable",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async payoutInformationTable(
    @common.Param() params: PayoutInformationTableWhereUniqueInput
  ): Promise<PayoutInformationTable | null> {
    const result = await this.service.payoutInformationTable({
      where: params,
      select: {
        bankAccountNumber: true,
        bankIfscCode: true,
        createdAt: true,
        firstPayoutDate: true,
        id: true,
        isBankAccountVerified: true,
        panNumber: true,
        payoutCycleLength: true,
        payoutDateOffset: true,

        restaurants: {
          select: {
            id: true,
          },
        },

        tanNumber: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: PayoutInformationTable })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PayoutInformationTable",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePayoutInformationTable(
    @common.Param() params: PayoutInformationTableWhereUniqueInput,
    @common.Body() data: PayoutInformationTableUpdateInput
  ): Promise<PayoutInformationTable | null> {
    try {
      return await this.service.updatePayoutInformationTable({
        where: params,
        data: {
          ...data,

          restaurants: {
            connect: data.restaurants,
          },
        },
        select: {
          bankAccountNumber: true,
          bankIfscCode: true,
          createdAt: true,
          firstPayoutDate: true,
          id: true,
          isBankAccountVerified: true,
          panNumber: true,
          payoutCycleLength: true,
          payoutDateOffset: true,

          restaurants: {
            select: {
              id: true,
            },
          },

          tanNumber: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: PayoutInformationTable })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PayoutInformationTable",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePayoutInformationTable(
    @common.Param() params: PayoutInformationTableWhereUniqueInput
  ): Promise<PayoutInformationTable | null> {
    try {
      return await this.service.deletePayoutInformationTable({
        where: params,
        select: {
          bankAccountNumber: true,
          bankIfscCode: true,
          createdAt: true,
          firstPayoutDate: true,
          id: true,
          isBankAccountVerified: true,
          panNumber: true,
          payoutCycleLength: true,
          payoutDateOffset: true,

          restaurants: {
            select: {
              id: true,
            },
          },

          tanNumber: true,
          updatedAt: true,
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