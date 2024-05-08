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
  MenuItemOption as PrismaMenuItemOption,
  OptionsVarientsGroup as PrismaOptionsVarientsGroup,
  MenuItemsOptionsGroup as PrismaMenuItemsOptionsGroup,
} from "@prisma/client";

export class MenuItemOptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.MenuItemOptionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.menuItemOption.count(args);
  }

  async menuItemOptions<T extends Prisma.MenuItemOptionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuItemOptionFindManyArgs>
  ): Promise<PrismaMenuItemOption[]> {
    return this.prisma.menuItemOption.findMany<Prisma.MenuItemOptionFindManyArgs>(
      args
    );
  }
  async menuItemOption<T extends Prisma.MenuItemOptionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuItemOptionFindUniqueArgs>
  ): Promise<PrismaMenuItemOption | null> {
    return this.prisma.menuItemOption.findUnique(args);
  }
  async createMenuItemOption<T extends Prisma.MenuItemOptionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuItemOptionCreateArgs>
  ): Promise<PrismaMenuItemOption> {
    return this.prisma.menuItemOption.create<T>(args);
  }
  async updateMenuItemOption<T extends Prisma.MenuItemOptionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuItemOptionUpdateArgs>
  ): Promise<PrismaMenuItemOption> {
    return this.prisma.menuItemOption.update<T>(args);
  }
  async deleteMenuItemOption<T extends Prisma.MenuItemOptionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuItemOptionDeleteArgs>
  ): Promise<PrismaMenuItemOption> {
    return this.prisma.menuItemOption.delete(args);
  }

  async findOptionsVarientsGroup(
    parentId: string,
    args: Prisma.OptionsVarientsGroupFindManyArgs
  ): Promise<PrismaOptionsVarientsGroup[]> {
    return this.prisma.menuItemOption
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .optionsVarientsGroup(args);
  }

  async getMenuItemsOptionsGroups(
    parentId: string
  ): Promise<PrismaMenuItemsOptionsGroup | null> {
    return this.prisma.menuItemOption
      .findUnique({
        where: { id: parentId },
      })
      .menuItemsOptionsGroups();
  }
}