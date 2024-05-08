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
import { OrderItemService } from "../orderItem.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { OrderItemCreateInput } from "./OrderItemCreateInput";
import { OrderItem } from "./OrderItem";
import { OrderItemFindManyArgs } from "./OrderItemFindManyArgs";
import { OrderItemWhereUniqueInput } from "./OrderItemWhereUniqueInput";
import { OrderItemUpdateInput } from "./OrderItemUpdateInput";
import { ComplaintItemFindManyArgs } from "../../complaintItem/base/ComplaintItemFindManyArgs";
import { ComplaintItem } from "../../complaintItem/base/ComplaintItem";
import { ComplaintItemWhereUniqueInput } from "../../complaintItem/base/ComplaintItemWhereUniqueInput";
import { OrderItemsAddonFindManyArgs } from "../../orderItemsAddon/base/OrderItemsAddonFindManyArgs";
import { OrderItemsAddon } from "../../orderItemsAddon/base/OrderItemsAddon";
import { OrderItemsAddonWhereUniqueInput } from "../../orderItemsAddon/base/OrderItemsAddonWhereUniqueInput";
import { OrderItemsRatingFindManyArgs } from "../../orderItemsRating/base/OrderItemsRatingFindManyArgs";
import { OrderItemsRating } from "../../orderItemsRating/base/OrderItemsRating";
import { OrderItemsRatingWhereUniqueInput } from "../../orderItemsRating/base/OrderItemsRatingWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class OrderItemControllerBase {
  constructor(
    protected readonly service: OrderItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: OrderItem })
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createOrderItem(
    @common.Body() data: OrderItemCreateInput
  ): Promise<OrderItem> {
    return await this.service.createOrderItem({
      data: {
        ...data,

        optionsVarientsItem: {
          connect: data.optionsVarientsItem,
        },

        orderHistory: {
          connect: data.orderHistory,
        },
      },
      select: {
        createdAt: true,
        customizationOptions: true,
        id: true,

        optionsVarientsItem: {
          select: {
            id: true,
          },
        },

        orderHistory: {
          select: {
            id: true,
          },
        },

        quantity: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [OrderItem] })
  @ApiNestedQuery(OrderItemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async orderItems(@common.Req() request: Request): Promise<OrderItem[]> {
    const args = plainToClass(OrderItemFindManyArgs, request.query);
    return this.service.orderItems({
      ...args,
      select: {
        createdAt: true,
        customizationOptions: true,
        id: true,

        optionsVarientsItem: {
          select: {
            id: true,
          },
        },

        orderHistory: {
          select: {
            id: true,
          },
        },

        quantity: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: OrderItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async orderItem(
    @common.Param() params: OrderItemWhereUniqueInput
  ): Promise<OrderItem | null> {
    const result = await this.service.orderItem({
      where: params,
      select: {
        createdAt: true,
        customizationOptions: true,
        id: true,

        optionsVarientsItem: {
          select: {
            id: true,
          },
        },

        orderHistory: {
          select: {
            id: true,
          },
        },

        quantity: true,
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
  @swagger.ApiOkResponse({ type: OrderItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateOrderItem(
    @common.Param() params: OrderItemWhereUniqueInput,
    @common.Body() data: OrderItemUpdateInput
  ): Promise<OrderItem | null> {
    try {
      return await this.service.updateOrderItem({
        where: params,
        data: {
          ...data,

          optionsVarientsItem: {
            connect: data.optionsVarientsItem,
          },

          orderHistory: {
            connect: data.orderHistory,
          },
        },
        select: {
          createdAt: true,
          customizationOptions: true,
          id: true,

          optionsVarientsItem: {
            select: {
              id: true,
            },
          },

          orderHistory: {
            select: {
              id: true,
            },
          },

          quantity: true,
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
  @swagger.ApiOkResponse({ type: OrderItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteOrderItem(
    @common.Param() params: OrderItemWhereUniqueInput
  ): Promise<OrderItem | null> {
    try {
      return await this.service.deleteOrderItem({
        where: params,
        select: {
          createdAt: true,
          customizationOptions: true,
          id: true,

          optionsVarientsItem: {
            select: {
              id: true,
            },
          },

          orderHistory: {
            select: {
              id: true,
            },
          },

          quantity: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/complaintItem")
  @ApiNestedQuery(ComplaintItemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ComplaintItem",
    action: "read",
    possession: "any",
  })
  async findComplaintItem(
    @common.Req() request: Request,
    @common.Param() params: OrderItemWhereUniqueInput
  ): Promise<ComplaintItem[]> {
    const query = plainToClass(ComplaintItemFindManyArgs, request.query);
    const results = await this.service.findComplaintItem(params.id, {
      ...query,
      select: {
        complaintsBook: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        isRefund: true,

        orderItems: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/complaintItem")
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "update",
    possession: "any",
  })
  async connectComplaintItem(
    @common.Param() params: OrderItemWhereUniqueInput,
    @common.Body() body: ComplaintItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      complaintItem: {
        connect: body,
      },
    };
    await this.service.updateOrderItem({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/complaintItem")
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "update",
    possession: "any",
  })
  async updateComplaintItem(
    @common.Param() params: OrderItemWhereUniqueInput,
    @common.Body() body: ComplaintItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      complaintItem: {
        set: body,
      },
    };
    await this.service.updateOrderItem({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/complaintItem")
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "update",
    possession: "any",
  })
  async disconnectComplaintItem(
    @common.Param() params: OrderItemWhereUniqueInput,
    @common.Body() body: ComplaintItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      complaintItem: {
        disconnect: body,
      },
    };
    await this.service.updateOrderItem({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/orderItemsAddons")
  @ApiNestedQuery(OrderItemsAddonFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "OrderItemsAddon",
    action: "read",
    possession: "any",
  })
  async findOrderItemsAddons(
    @common.Req() request: Request,
    @common.Param() params: OrderItemWhereUniqueInput
  ): Promise<OrderItemsAddon[]> {
    const query = plainToClass(OrderItemsAddonFindManyArgs, request.query);
    const results = await this.service.findOrderItemsAddons(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        optionsAddOnsItem: {
          select: {
            id: true,
          },
        },

        orderItems: {
          select: {
            id: true,
          },
        },

        quantity: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/orderItemsAddons")
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "update",
    possession: "any",
  })
  async connectOrderItemsAddons(
    @common.Param() params: OrderItemWhereUniqueInput,
    @common.Body() body: OrderItemsAddonWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orderItemsAddons: {
        connect: body,
      },
    };
    await this.service.updateOrderItem({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/orderItemsAddons")
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "update",
    possession: "any",
  })
  async updateOrderItemsAddons(
    @common.Param() params: OrderItemWhereUniqueInput,
    @common.Body() body: OrderItemsAddonWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orderItemsAddons: {
        set: body,
      },
    };
    await this.service.updateOrderItem({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/orderItemsAddons")
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "update",
    possession: "any",
  })
  async disconnectOrderItemsAddons(
    @common.Param() params: OrderItemWhereUniqueInput,
    @common.Body() body: OrderItemsAddonWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orderItemsAddons: {
        disconnect: body,
      },
    };
    await this.service.updateOrderItem({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/orderItemsRatings")
  @ApiNestedQuery(OrderItemsRatingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "OrderItemsRating",
    action: "read",
    possession: "any",
  })
  async findOrderItemsRatings(
    @common.Req() request: Request,
    @common.Param() params: OrderItemWhereUniqueInput
  ): Promise<OrderItemsRating[]> {
    const query = plainToClass(OrderItemsRatingFindManyArgs, request.query);
    const results = await this.service.findOrderItemsRatings(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        orderItemRating: true,

        orderItems: {
          select: {
            id: true,
          },
        },

        ratings: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/orderItemsRatings")
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "update",
    possession: "any",
  })
  async connectOrderItemsRatings(
    @common.Param() params: OrderItemWhereUniqueInput,
    @common.Body() body: OrderItemsRatingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orderItemsRatings: {
        connect: body,
      },
    };
    await this.service.updateOrderItem({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/orderItemsRatings")
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "update",
    possession: "any",
  })
  async updateOrderItemsRatings(
    @common.Param() params: OrderItemWhereUniqueInput,
    @common.Body() body: OrderItemsRatingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orderItemsRatings: {
        set: body,
      },
    };
    await this.service.updateOrderItem({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/orderItemsRatings")
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "update",
    possession: "any",
  })
  async disconnectOrderItemsRatings(
    @common.Param() params: OrderItemWhereUniqueInput,
    @common.Body() body: OrderItemsRatingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orderItemsRatings: {
        disconnect: body,
      },
    };
    await this.service.updateOrderItem({
      where: params,
      data,
      select: { id: true },
    });
  }
}