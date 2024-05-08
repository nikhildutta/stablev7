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
  OrderItemsAddon as PrismaOrderItemsAddon,
  OptionsAddOnsItem as PrismaOptionsAddOnsItem,
  OrderItem as PrismaOrderItem,
} from "@prisma/client";

export class OrderItemsAddonServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.OrderItemsAddonCountArgs, "select">
  ): Promise<number> {
    return this.prisma.orderItemsAddon.count(args);
  }

  async orderItemsAddons<T extends Prisma.OrderItemsAddonFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderItemsAddonFindManyArgs>
  ): Promise<PrismaOrderItemsAddon[]> {
    return this.prisma.orderItemsAddon.findMany<Prisma.OrderItemsAddonFindManyArgs>(
      args
    );
  }
  async orderItemsAddon<T extends Prisma.OrderItemsAddonFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderItemsAddonFindUniqueArgs>
  ): Promise<PrismaOrderItemsAddon | null> {
    return this.prisma.orderItemsAddon.findUnique(args);
  }
  async createOrderItemsAddon<T extends Prisma.OrderItemsAddonCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderItemsAddonCreateArgs>
  ): Promise<PrismaOrderItemsAddon> {
    return this.prisma.orderItemsAddon.create<T>(args);
  }
  async updateOrderItemsAddon<T extends Prisma.OrderItemsAddonUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderItemsAddonUpdateArgs>
  ): Promise<PrismaOrderItemsAddon> {
    return this.prisma.orderItemsAddon.update<T>(args);
  }
  async deleteOrderItemsAddon<T extends Prisma.OrderItemsAddonDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderItemsAddonDeleteArgs>
  ): Promise<PrismaOrderItemsAddon> {
    return this.prisma.orderItemsAddon.delete(args);
  }

  async getOptionsAddOnsItem(
    parentId: string
  ): Promise<PrismaOptionsAddOnsItem | null> {
    return this.prisma.orderItemsAddon
      .findUnique({
        where: { id: parentId },
      })
      .optionsAddOnsItem();
  }

  async getOrderItems(parentId: string): Promise<PrismaOrderItem | null> {
    return this.prisma.orderItemsAddon
      .findUnique({
        where: { id: parentId },
      })
      .orderItems();
  }
}