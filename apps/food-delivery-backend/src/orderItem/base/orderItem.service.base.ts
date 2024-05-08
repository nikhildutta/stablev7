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
  OrderItem as PrismaOrderItem,
  ComplaintItem as PrismaComplaintItem,
  OrderItemsAddon as PrismaOrderItemsAddon,
  OrderItemsRating as PrismaOrderItemsRating,
  OptionsVarientsItem as PrismaOptionsVarientsItem,
  OrderHistory as PrismaOrderHistory,
} from "@prisma/client";

export class OrderItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.OrderItemCountArgs, "select">
  ): Promise<number> {
    return this.prisma.orderItem.count(args);
  }

  async orderItems<T extends Prisma.OrderItemFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderItemFindManyArgs>
  ): Promise<PrismaOrderItem[]> {
    return this.prisma.orderItem.findMany<Prisma.OrderItemFindManyArgs>(args);
  }
  async orderItem<T extends Prisma.OrderItemFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderItemFindUniqueArgs>
  ): Promise<PrismaOrderItem | null> {
    return this.prisma.orderItem.findUnique(args);
  }
  async createOrderItem<T extends Prisma.OrderItemCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderItemCreateArgs>
  ): Promise<PrismaOrderItem> {
    return this.prisma.orderItem.create<T>(args);
  }
  async updateOrderItem<T extends Prisma.OrderItemUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderItemUpdateArgs>
  ): Promise<PrismaOrderItem> {
    return this.prisma.orderItem.update<T>(args);
  }
  async deleteOrderItem<T extends Prisma.OrderItemDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderItemDeleteArgs>
  ): Promise<PrismaOrderItem> {
    return this.prisma.orderItem.delete(args);
  }

  async findComplaintItem(
    parentId: string,
    args: Prisma.ComplaintItemFindManyArgs
  ): Promise<PrismaComplaintItem[]> {
    return this.prisma.orderItem
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .complaintItem(args);
  }

  async findOrderItemsAddons(
    parentId: string,
    args: Prisma.OrderItemsAddonFindManyArgs
  ): Promise<PrismaOrderItemsAddon[]> {
    return this.prisma.orderItem
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .orderItemsAddons(args);
  }

  async findOrderItemsRatings(
    parentId: string,
    args: Prisma.OrderItemsRatingFindManyArgs
  ): Promise<PrismaOrderItemsRating[]> {
    return this.prisma.orderItem
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .orderItemsRatings(args);
  }

  async getOptionsVarientsItem(
    parentId: string
  ): Promise<PrismaOptionsVarientsItem | null> {
    return this.prisma.orderItem
      .findUnique({
        where: { id: parentId },
      })
      .optionsVarientsItem();
  }

  async getOrderHistory(parentId: string): Promise<PrismaOrderHistory | null> {
    return this.prisma.orderItem
      .findUnique({
        where: { id: parentId },
      })
      .orderHistory();
  }
}