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
  MenuItemsOptionsGroup as PrismaMenuItemsOptionsGroup,
  MenuItemOption as PrismaMenuItemOption,
  MenuItem as PrismaMenuItem,
} from "@prisma/client";

export class MenuItemsOptionsGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.MenuItemsOptionsGroupCountArgs, "select">
  ): Promise<number> {
    return this.prisma.menuItemsOptionsGroup.count(args);
  }

  async menuItemsOptionsGroups<
    T extends Prisma.MenuItemsOptionsGroupFindManyArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.MenuItemsOptionsGroupFindManyArgs>
  ): Promise<PrismaMenuItemsOptionsGroup[]> {
    return this.prisma.menuItemsOptionsGroup.findMany<Prisma.MenuItemsOptionsGroupFindManyArgs>(
      args
    );
  }
  async menuItemsOptionsGroup<
    T extends Prisma.MenuItemsOptionsGroupFindUniqueArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.MenuItemsOptionsGroupFindUniqueArgs>
  ): Promise<PrismaMenuItemsOptionsGroup | null> {
    return this.prisma.menuItemsOptionsGroup.findUnique(args);
  }
  async createMenuItemsOptionsGroup<
    T extends Prisma.MenuItemsOptionsGroupCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.MenuItemsOptionsGroupCreateArgs>
  ): Promise<PrismaMenuItemsOptionsGroup> {
    return this.prisma.menuItemsOptionsGroup.create<T>(args);
  }
  async updateMenuItemsOptionsGroup<
    T extends Prisma.MenuItemsOptionsGroupUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.MenuItemsOptionsGroupUpdateArgs>
  ): Promise<PrismaMenuItemsOptionsGroup> {
    return this.prisma.menuItemsOptionsGroup.update<T>(args);
  }
  async deleteMenuItemsOptionsGroup<
    T extends Prisma.MenuItemsOptionsGroupDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.MenuItemsOptionsGroupDeleteArgs>
  ): Promise<PrismaMenuItemsOptionsGroup> {
    return this.prisma.menuItemsOptionsGroup.delete(args);
  }

  async findMenuItemOptions(
    parentId: string,
    args: Prisma.MenuItemOptionFindManyArgs
  ): Promise<PrismaMenuItemOption[]> {
    return this.prisma.menuItemsOptionsGroup
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .menuItemOptions(args);
  }

  async getMenuItems(parentId: string): Promise<PrismaMenuItem | null> {
    return this.prisma.menuItemsOptionsGroup
      .findUnique({
        where: { id: parentId },
      })
      .menuItems();
  }
}