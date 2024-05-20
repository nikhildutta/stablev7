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
import { CustomerSubscriptionService } from "../customerSubscription.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CustomerSubscriptionCreateInput } from "./CustomerSubscriptionCreateInput";
import { CustomerSubscription } from "./CustomerSubscription";
import { CustomerSubscriptionFindManyArgs } from "./CustomerSubscriptionFindManyArgs";
import { CustomerSubscriptionWhereUniqueInput } from "./CustomerSubscriptionWhereUniqueInput";
import { CustomerSubscriptionUpdateInput } from "./CustomerSubscriptionUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CustomerSubscriptionControllerBase {
  constructor(
    protected readonly service: CustomerSubscriptionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CustomerSubscription })
  @nestAccessControl.UseRoles({
    resource: "CustomerSubscription",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createCustomerSubscription(
    @common.Body() data: CustomerSubscriptionCreateInput
  ): Promise<CustomerSubscription> {
    return await this.service.createCustomerSubscription({
      data: {
        ...data,

        appUsers: {
          connect: data.appUsers,
        },

        subscriptionPlans: {
          connect: data.subscriptionPlans,
        },

        subscriptions: {
          connect: data.subscriptions,
        },
      },
      select: {
        activationDate: true,

        appUsers: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        expirationDate: true,
        id: true,
        renewalCount: true,

        subscriptionPlans: {
          select: {
            id: true,
          },
        },

        subscriptions: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [CustomerSubscription] })
  @ApiNestedQuery(CustomerSubscriptionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "CustomerSubscription",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async customerSubscriptions(
    @common.Req() request: Request
  ): Promise<CustomerSubscription[]> {
    const args = plainToClass(CustomerSubscriptionFindManyArgs, request.query);
    return this.service.customerSubscriptions({
      ...args,
      select: {
        activationDate: true,

        appUsers: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        expirationDate: true,
        id: true,
        renewalCount: true,

        subscriptionPlans: {
          select: {
            id: true,
          },
        },

        subscriptions: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CustomerSubscription })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CustomerSubscription",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async customerSubscription(
    @common.Param() params: CustomerSubscriptionWhereUniqueInput
  ): Promise<CustomerSubscription | null> {
    const result = await this.service.customerSubscription({
      where: params,
      select: {
        activationDate: true,

        appUsers: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        expirationDate: true,
        id: true,
        renewalCount: true,

        subscriptionPlans: {
          select: {
            id: true,
          },
        },

        subscriptions: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: CustomerSubscription })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CustomerSubscription",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateCustomerSubscription(
    @common.Param() params: CustomerSubscriptionWhereUniqueInput,
    @common.Body() data: CustomerSubscriptionUpdateInput
  ): Promise<CustomerSubscription | null> {
    try {
      return await this.service.updateCustomerSubscription({
        where: params,
        data: {
          ...data,

          appUsers: {
            connect: data.appUsers,
          },

          subscriptionPlans: {
            connect: data.subscriptionPlans,
          },

          subscriptions: {
            connect: data.subscriptions,
          },
        },
        select: {
          activationDate: true,

          appUsers: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          expirationDate: true,
          id: true,
          renewalCount: true,

          subscriptionPlans: {
            select: {
              id: true,
            },
          },

          subscriptions: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: CustomerSubscription })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CustomerSubscription",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCustomerSubscription(
    @common.Param() params: CustomerSubscriptionWhereUniqueInput
  ): Promise<CustomerSubscription | null> {
    try {
      return await this.service.deleteCustomerSubscription({
        where: params,
        select: {
          activationDate: true,

          appUsers: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          expirationDate: true,
          id: true,
          renewalCount: true,

          subscriptionPlans: {
            select: {
              id: true,
            },
          },

          subscriptions: {
            select: {
              id: true,
            },
          },

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
