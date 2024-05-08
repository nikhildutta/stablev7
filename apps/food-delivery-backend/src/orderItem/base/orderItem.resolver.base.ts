/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { OrderItem } from "./OrderItem";
import { OrderItemCountArgs } from "./OrderItemCountArgs";
import { OrderItemFindManyArgs } from "./OrderItemFindManyArgs";
import { OrderItemFindUniqueArgs } from "./OrderItemFindUniqueArgs";
import { CreateOrderItemArgs } from "./CreateOrderItemArgs";
import { UpdateOrderItemArgs } from "./UpdateOrderItemArgs";
import { DeleteOrderItemArgs } from "./DeleteOrderItemArgs";
import { ComplaintItemFindManyArgs } from "../../complaintItem/base/ComplaintItemFindManyArgs";
import { ComplaintItem } from "../../complaintItem/base/ComplaintItem";
import { OrderItemsAddonFindManyArgs } from "../../orderItemsAddon/base/OrderItemsAddonFindManyArgs";
import { OrderItemsAddon } from "../../orderItemsAddon/base/OrderItemsAddon";
import { OrderItemsRatingFindManyArgs } from "../../orderItemsRating/base/OrderItemsRatingFindManyArgs";
import { OrderItemsRating } from "../../orderItemsRating/base/OrderItemsRating";
import { OptionsVarientsItem } from "../../optionsVarientsItem/base/OptionsVarientsItem";
import { OrderHistory } from "../../orderHistory/base/OrderHistory";
import { OrderItemService } from "../orderItem.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OrderItem)
export class OrderItemResolverBase {
  constructor(
    protected readonly service: OrderItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "read",
    possession: "any",
  })
  async _orderItemsMeta(
    @graphql.Args() args: OrderItemCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [OrderItem])
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "read",
    possession: "any",
  })
  async orderItems(
    @graphql.Args() args: OrderItemFindManyArgs
  ): Promise<OrderItem[]> {
    return this.service.orderItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => OrderItem, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "read",
    possession: "own",
  })
  async orderItem(
    @graphql.Args() args: OrderItemFindUniqueArgs
  ): Promise<OrderItem | null> {
    const result = await this.service.orderItem(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => OrderItem)
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "create",
    possession: "any",
  })
  async createOrderItem(
    @graphql.Args() args: CreateOrderItemArgs
  ): Promise<OrderItem> {
    return await this.service.createOrderItem({
      ...args,
      data: {
        ...args.data,

        optionsVarientsItem: {
          connect: args.data.optionsVarientsItem,
        },

        orderHistory: {
          connect: args.data.orderHistory,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => OrderItem)
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "update",
    possession: "any",
  })
  async updateOrderItem(
    @graphql.Args() args: UpdateOrderItemArgs
  ): Promise<OrderItem | null> {
    try {
      return await this.service.updateOrderItem({
        ...args,
        data: {
          ...args.data,

          optionsVarientsItem: {
            connect: args.data.optionsVarientsItem,
          },

          orderHistory: {
            connect: args.data.orderHistory,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => OrderItem)
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "delete",
    possession: "any",
  })
  async deleteOrderItem(
    @graphql.Args() args: DeleteOrderItemArgs
  ): Promise<OrderItem | null> {
    try {
      return await this.service.deleteOrderItem(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ComplaintItem], { name: "complaintItem" })
  @nestAccessControl.UseRoles({
    resource: "ComplaintItem",
    action: "read",
    possession: "any",
  })
  async findComplaintItem(
    @graphql.Parent() parent: OrderItem,
    @graphql.Args() args: ComplaintItemFindManyArgs
  ): Promise<ComplaintItem[]> {
    const results = await this.service.findComplaintItem(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [OrderItemsAddon], { name: "orderItemsAddons" })
  @nestAccessControl.UseRoles({
    resource: "OrderItemsAddon",
    action: "read",
    possession: "any",
  })
  async findOrderItemsAddons(
    @graphql.Parent() parent: OrderItem,
    @graphql.Args() args: OrderItemsAddonFindManyArgs
  ): Promise<OrderItemsAddon[]> {
    const results = await this.service.findOrderItemsAddons(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [OrderItemsRating], { name: "orderItemsRatings" })
  @nestAccessControl.UseRoles({
    resource: "OrderItemsRating",
    action: "read",
    possession: "any",
  })
  async findOrderItemsRatings(
    @graphql.Parent() parent: OrderItem,
    @graphql.Args() args: OrderItemsRatingFindManyArgs
  ): Promise<OrderItemsRating[]> {
    const results = await this.service.findOrderItemsRatings(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => OptionsVarientsItem, {
    nullable: true,
    name: "optionsVarientsItem",
  })
  @nestAccessControl.UseRoles({
    resource: "OptionsVarientsItem",
    action: "read",
    possession: "any",
  })
  async getOptionsVarientsItem(
    @graphql.Parent() parent: OrderItem
  ): Promise<OptionsVarientsItem | null> {
    const result = await this.service.getOptionsVarientsItem(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => OrderHistory, {
    nullable: true,
    name: "orderHistory",
  })
  @nestAccessControl.UseRoles({
    resource: "OrderHistory",
    action: "read",
    possession: "any",
  })
  async getOrderHistory(
    @graphql.Parent() parent: OrderItem
  ): Promise<OrderHistory | null> {
    const result = await this.service.getOrderHistory(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}