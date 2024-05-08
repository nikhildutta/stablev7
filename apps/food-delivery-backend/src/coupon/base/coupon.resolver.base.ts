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
import { Coupon } from "./Coupon";
import { CouponCountArgs } from "./CouponCountArgs";
import { CouponFindManyArgs } from "./CouponFindManyArgs";
import { CouponFindUniqueArgs } from "./CouponFindUniqueArgs";
import { CreateCouponArgs } from "./CreateCouponArgs";
import { UpdateCouponArgs } from "./UpdateCouponArgs";
import { DeleteCouponArgs } from "./DeleteCouponArgs";
import { CouponRedemptionFindManyArgs } from "../../couponRedemption/base/CouponRedemptionFindManyArgs";
import { CouponRedemption } from "../../couponRedemption/base/CouponRedemption";
import { OrderHistoryFindManyArgs } from "../../orderHistory/base/OrderHistoryFindManyArgs";
import { OrderHistory } from "../../orderHistory/base/OrderHistory";
import { Discount } from "../../discount/base/Discount";
import { CouponService } from "../coupon.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Coupon)
export class CouponResolverBase {
  constructor(
    protected readonly service: CouponService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Coupon",
    action: "read",
    possession: "any",
  })
  async _couponsMeta(
    @graphql.Args() args: CouponCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Coupon])
  @nestAccessControl.UseRoles({
    resource: "Coupon",
    action: "read",
    possession: "any",
  })
  async coupons(@graphql.Args() args: CouponFindManyArgs): Promise<Coupon[]> {
    return this.service.coupons(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Coupon, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Coupon",
    action: "read",
    possession: "own",
  })
  async coupon(
    @graphql.Args() args: CouponFindUniqueArgs
  ): Promise<Coupon | null> {
    const result = await this.service.coupon(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Coupon)
  @nestAccessControl.UseRoles({
    resource: "Coupon",
    action: "create",
    possession: "any",
  })
  async createCoupon(@graphql.Args() args: CreateCouponArgs): Promise<Coupon> {
    return await this.service.createCoupon({
      ...args,
      data: {
        ...args.data,

        discount: {
          connect: args.data.discount,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Coupon)
  @nestAccessControl.UseRoles({
    resource: "Coupon",
    action: "update",
    possession: "any",
  })
  async updateCoupon(
    @graphql.Args() args: UpdateCouponArgs
  ): Promise<Coupon | null> {
    try {
      return await this.service.updateCoupon({
        ...args,
        data: {
          ...args.data,

          discount: {
            connect: args.data.discount,
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

  @graphql.Mutation(() => Coupon)
  @nestAccessControl.UseRoles({
    resource: "Coupon",
    action: "delete",
    possession: "any",
  })
  async deleteCoupon(
    @graphql.Args() args: DeleteCouponArgs
  ): Promise<Coupon | null> {
    try {
      return await this.service.deleteCoupon(args);
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
  @graphql.ResolveField(() => [CouponRedemption], { name: "couponRedemptions" })
  @nestAccessControl.UseRoles({
    resource: "CouponRedemption",
    action: "read",
    possession: "any",
  })
  async findCouponRedemptions(
    @graphql.Parent() parent: Coupon,
    @graphql.Args() args: CouponRedemptionFindManyArgs
  ): Promise<CouponRedemption[]> {
    const results = await this.service.findCouponRedemptions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [OrderHistory], { name: "orderHistory" })
  @nestAccessControl.UseRoles({
    resource: "OrderHistory",
    action: "read",
    possession: "any",
  })
  async findOrderHistory(
    @graphql.Parent() parent: Coupon,
    @graphql.Args() args: OrderHistoryFindManyArgs
  ): Promise<OrderHistory[]> {
    const results = await this.service.findOrderHistory(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Discount, {
    nullable: true,
    name: "discount",
  })
  @nestAccessControl.UseRoles({
    resource: "Discount",
    action: "read",
    possession: "any",
  })
  async getDiscount(
    @graphql.Parent() parent: Coupon
  ): Promise<Discount | null> {
    const result = await this.service.getDiscount(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}