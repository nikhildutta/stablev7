/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Coupon as PrismaCoupon,
  CouponRedemption as PrismaCouponRedemption,
  OrderHistory as PrismaOrderHistory,
  Discount as PrismaDiscount,
} from "@prisma/client";

export class CouponServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CouponCountArgs, "select">): Promise<number> {
    return this.prisma.coupon.count(args);
  }

  async coupons<T extends Prisma.CouponFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CouponFindManyArgs>
  ): Promise<PrismaCoupon[]> {
    return this.prisma.coupon.findMany<Prisma.CouponFindManyArgs>(args);
  }
  async coupon<T extends Prisma.CouponFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CouponFindUniqueArgs>
  ): Promise<PrismaCoupon | null> {
    return this.prisma.coupon.findUnique(args);
  }
  async createCoupon<T extends Prisma.CouponCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CouponCreateArgs>
  ): Promise<PrismaCoupon> {
    return this.prisma.coupon.create<T>(args);
  }
  async updateCoupon<T extends Prisma.CouponUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CouponUpdateArgs>
  ): Promise<PrismaCoupon> {
    return this.prisma.coupon.update<T>(args);
  }
  async deleteCoupon<T extends Prisma.CouponDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CouponDeleteArgs>
  ): Promise<PrismaCoupon> {
    return this.prisma.coupon.delete(args);
  }

  async findCouponRedemptions(
    parentId: string,
    args: Prisma.CouponRedemptionFindManyArgs
  ): Promise<PrismaCouponRedemption[]> {
    return this.prisma.coupon
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .couponRedemptions(args);
  }

  async findOrderHistory(
    parentId: string,
    args: Prisma.OrderHistoryFindManyArgs
  ): Promise<PrismaOrderHistory[]> {
    return this.prisma.coupon
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .orderHistory(args);
  }

  async getDiscount(parentId: string): Promise<PrismaDiscount | null> {
    return this.prisma.coupon
      .findUnique({
        where: { id: parentId },
      })
      .discount();
  }
}