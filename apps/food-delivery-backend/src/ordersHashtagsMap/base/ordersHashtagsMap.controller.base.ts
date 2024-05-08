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
import { OrdersHashtagsMapService } from "../ordersHashtagsMap.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { OrdersHashtagsMapCreateInput } from "./OrdersHashtagsMapCreateInput";
import { OrdersHashtagsMap } from "./OrdersHashtagsMap";
import { OrdersHashtagsMapFindManyArgs } from "./OrdersHashtagsMapFindManyArgs";
import { OrdersHashtagsMapWhereUniqueInput } from "./OrdersHashtagsMapWhereUniqueInput";
import { OrdersHashtagsMapUpdateInput } from "./OrdersHashtagsMapUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class OrdersHashtagsMapControllerBase {
  constructor(
    protected readonly service: OrdersHashtagsMapService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: OrdersHashtagsMap })
  @nestAccessControl.UseRoles({
    resource: "OrdersHashtagsMap",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createOrdersHashtagsMap(
    @common.Body() data: OrdersHashtagsMapCreateInput
  ): Promise<OrdersHashtagsMap> {
    return await this.service.createOrdersHashtagsMap({
      data: {
        ...data,

        hashtags: {
          connect: data.hashtags,
        },

        orderHistory: {
          connect: data.orderHistory,
        },
      },
      select: {
        hashtags: {
          select: {
            id: true,
          },
        },

        id: true,

        orderHistory: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [OrdersHashtagsMap] })
  @ApiNestedQuery(OrdersHashtagsMapFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "OrdersHashtagsMap",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ordersHashtagsMaps(
    @common.Req() request: Request
  ): Promise<OrdersHashtagsMap[]> {
    const args = plainToClass(OrdersHashtagsMapFindManyArgs, request.query);
    return this.service.ordersHashtagsMaps({
      ...args,
      select: {
        hashtags: {
          select: {
            id: true,
          },
        },

        id: true,

        orderHistory: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: OrdersHashtagsMap })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OrdersHashtagsMap",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ordersHashtagsMap(
    @common.Param() params: OrdersHashtagsMapWhereUniqueInput
  ): Promise<OrdersHashtagsMap | null> {
    const result = await this.service.ordersHashtagsMap({
      where: params,
      select: {
        hashtags: {
          select: {
            id: true,
          },
        },

        id: true,

        orderHistory: {
          select: {
            id: true,
          },
        },
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
  @swagger.ApiOkResponse({ type: OrdersHashtagsMap })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OrdersHashtagsMap",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateOrdersHashtagsMap(
    @common.Param() params: OrdersHashtagsMapWhereUniqueInput,
    @common.Body() data: OrdersHashtagsMapUpdateInput
  ): Promise<OrdersHashtagsMap | null> {
    try {
      return await this.service.updateOrdersHashtagsMap({
        where: params,
        data: {
          ...data,

          hashtags: {
            connect: data.hashtags,
          },

          orderHistory: {
            connect: data.orderHistory,
          },
        },
        select: {
          hashtags: {
            select: {
              id: true,
            },
          },

          id: true,

          orderHistory: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: OrdersHashtagsMap })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OrdersHashtagsMap",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteOrdersHashtagsMap(
    @common.Param() params: OrdersHashtagsMapWhereUniqueInput
  ): Promise<OrdersHashtagsMap | null> {
    try {
      return await this.service.deleteOrdersHashtagsMap({
        where: params,
        select: {
          hashtags: {
            select: {
              id: true,
            },
          },

          id: true,

          orderHistory: {
            select: {
              id: true,
            },
          },
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