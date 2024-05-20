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
  DailyMenuItemStock as PrismaDailyMenuItemStock,
  MenuItem as PrismaMenuItem,
} from "@prisma/client";

export class DailyMenuItemStockServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DailyMenuItemStockCountArgs, "select">
  ): Promise<number> {
    return this.prisma.dailyMenuItemStock.count(args);
  }

  async dailyMenuItemStocks<T extends Prisma.DailyMenuItemStockFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DailyMenuItemStockFindManyArgs>
  ): Promise<PrismaDailyMenuItemStock[]> {
    return this.prisma.dailyMenuItemStock.findMany<Prisma.DailyMenuItemStockFindManyArgs>(
      args
    );
  }
  async dailyMenuItemStock<T extends Prisma.DailyMenuItemStockFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DailyMenuItemStockFindUniqueArgs>
  ): Promise<PrismaDailyMenuItemStock | null> {
    return this.prisma.dailyMenuItemStock.findUnique(args);
  }
  async createDailyMenuItemStock<T extends Prisma.DailyMenuItemStockCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DailyMenuItemStockCreateArgs>
  ): Promise<PrismaDailyMenuItemStock> {
    return this.prisma.dailyMenuItemStock.create<T>(args);
  }
  async updateDailyMenuItemStock<T extends Prisma.DailyMenuItemStockUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DailyMenuItemStockUpdateArgs>
  ): Promise<PrismaDailyMenuItemStock> {
    return this.prisma.dailyMenuItemStock.update<T>(args);
  }
  async deleteDailyMenuItemStock<T extends Prisma.DailyMenuItemStockDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DailyMenuItemStockDeleteArgs>
  ): Promise<PrismaDailyMenuItemStock> {
    return this.prisma.dailyMenuItemStock.delete(args);
  }

  async getMenuItems(parentId: string): Promise<PrismaMenuItem | null> {
    return this.prisma.dailyMenuItemStock
      .findUnique({
        where: { id: parentId },
      })
      .menuItems();
  }
}
