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
  OrdersHashtagsMap as PrismaOrdersHashtagsMap,
  Hashtag as PrismaHashtag,
  OrderHistory as PrismaOrderHistory,
} from "@prisma/client";

export class OrdersHashtagsMapServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.OrdersHashtagsMapCountArgs, "select">
  ): Promise<number> {
    return this.prisma.ordersHashtagsMap.count(args);
  }

  async ordersHashtagsMaps<T extends Prisma.OrdersHashtagsMapFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrdersHashtagsMapFindManyArgs>
  ): Promise<PrismaOrdersHashtagsMap[]> {
    return this.prisma.ordersHashtagsMap.findMany<Prisma.OrdersHashtagsMapFindManyArgs>(
      args
    );
  }
  async ordersHashtagsMap<T extends Prisma.OrdersHashtagsMapFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrdersHashtagsMapFindUniqueArgs>
  ): Promise<PrismaOrdersHashtagsMap | null> {
    return this.prisma.ordersHashtagsMap.findUnique(args);
  }
  async createOrdersHashtagsMap<T extends Prisma.OrdersHashtagsMapCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrdersHashtagsMapCreateArgs>
  ): Promise<PrismaOrdersHashtagsMap> {
    return this.prisma.ordersHashtagsMap.create<T>(args);
  }
  async updateOrdersHashtagsMap<T extends Prisma.OrdersHashtagsMapUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrdersHashtagsMapUpdateArgs>
  ): Promise<PrismaOrdersHashtagsMap> {
    return this.prisma.ordersHashtagsMap.update<T>(args);
  }
  async deleteOrdersHashtagsMap<T extends Prisma.OrdersHashtagsMapDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrdersHashtagsMapDeleteArgs>
  ): Promise<PrismaOrdersHashtagsMap> {
    return this.prisma.ordersHashtagsMap.delete(args);
  }

  async getHashtags(parentId: string): Promise<PrismaHashtag | null> {
    return this.prisma.ordersHashtagsMap
      .findUnique({
        where: { id: parentId },
      })
      .hashtags();
  }

  async getOrderHistory(parentId: string): Promise<PrismaOrderHistory | null> {
    return this.prisma.ordersHashtagsMap
      .findUnique({
        where: { id: parentId },
      })
      .orderHistory();
  }
}
