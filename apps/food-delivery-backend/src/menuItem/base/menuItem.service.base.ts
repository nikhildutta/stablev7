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
  MenuItem as PrismaMenuItem,
  DailyMenuItemStock as PrismaDailyMenuItemStock,
  DiscountMenuItem as PrismaDiscountMenuItem,
  FavouriteMenuItem as PrismaFavouriteMenuItem,
  ItemPackagingFee as PrismaItemPackagingFee,
  MenuItemIngredient as PrismaMenuItemIngredient,
  MenuItemsHashtagsMap as PrismaMenuItemsHashtagsMap,
  MenuItemsOptionsGroup as PrismaMenuItemsOptionsGroup,
  MenuItemsWindowMap as PrismaMenuItemsWindowMap,
  MenuSubCategory as PrismaMenuSubCategory,
} from "@prisma/client";

export class MenuItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.MenuItemCountArgs, "select">): Promise<number> {
    return this.prisma.menuItem.count(args);
  }

  async menuItems<T extends Prisma.MenuItemFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuItemFindManyArgs>
  ): Promise<PrismaMenuItem[]> {
    return this.prisma.menuItem.findMany<Prisma.MenuItemFindManyArgs>(args);
  }
  async menuItem<T extends Prisma.MenuItemFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuItemFindUniqueArgs>
  ): Promise<PrismaMenuItem | null> {
    return this.prisma.menuItem.findUnique(args);
  }
  async createMenuItem<T extends Prisma.MenuItemCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuItemCreateArgs>
  ): Promise<PrismaMenuItem> {
    return this.prisma.menuItem.create<T>(args);
  }
  async updateMenuItem<T extends Prisma.MenuItemUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuItemUpdateArgs>
  ): Promise<PrismaMenuItem> {
    return this.prisma.menuItem.update<T>(args);
  }
  async deleteMenuItem<T extends Prisma.MenuItemDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuItemDeleteArgs>
  ): Promise<PrismaMenuItem> {
    return this.prisma.menuItem.delete(args);
  }

  async findDailyMenuItemStock(
    parentId: string,
    args: Prisma.DailyMenuItemStockFindManyArgs
  ): Promise<PrismaDailyMenuItemStock[]> {
    return this.prisma.menuItem
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .dailyMenuItemStock(args);
  }

  async findDiscountMenuItem(
    parentId: string,
    args: Prisma.DiscountMenuItemFindManyArgs
  ): Promise<PrismaDiscountMenuItem[]> {
    return this.prisma.menuItem
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .discountMenuItem(args);
  }

  async findFavouriteMenuItems(
    parentId: string,
    args: Prisma.FavouriteMenuItemFindManyArgs
  ): Promise<PrismaFavouriteMenuItem[]> {
    return this.prisma.menuItem
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .favouriteMenuItems(args);
  }

  async findItemPackagingFee(
    parentId: string,
    args: Prisma.ItemPackagingFeeFindManyArgs
  ): Promise<PrismaItemPackagingFee[]> {
    return this.prisma.menuItem
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .itemPackagingFee(args);
  }

  async findMenuItemIngredients(
    parentId: string,
    args: Prisma.MenuItemIngredientFindManyArgs
  ): Promise<PrismaMenuItemIngredient[]> {
    return this.prisma.menuItem
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .menuItemIngredients(args);
  }

  async findMenuItemsHashtagsMap(
    parentId: string,
    args: Prisma.MenuItemsHashtagsMapFindManyArgs
  ): Promise<PrismaMenuItemsHashtagsMap[]> {
    return this.prisma.menuItem
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .menuItemsHashtagsMap(args);
  }

  async findMenuItemsOptionsGroups(
    parentId: string,
    args: Prisma.MenuItemsOptionsGroupFindManyArgs
  ): Promise<PrismaMenuItemsOptionsGroup[]> {
    return this.prisma.menuItem
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .menuItemsOptionsGroups(args);
  }

  async findMenuItemsWindowMap(
    parentId: string,
    args: Prisma.MenuItemsWindowMapFindManyArgs
  ): Promise<PrismaMenuItemsWindowMap[]> {
    return this.prisma.menuItem
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .menuItemsWindowMap(args);
  }

  async getMenuSubCategories(
    parentId: string
  ): Promise<PrismaMenuSubCategory | null> {
    return this.prisma.menuItem
      .findUnique({
        where: { id: parentId },
      })
      .menuSubCategories();
  }
}
