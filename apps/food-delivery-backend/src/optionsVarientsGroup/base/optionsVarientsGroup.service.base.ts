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
  OptionsVarientsGroup as PrismaOptionsVarientsGroup,
  OptionsVarientsItem as PrismaOptionsVarientsItem,
  MenuItemOption as PrismaMenuItemOption,
} from "@prisma/client";

export class OptionsVarientsGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.OptionsVarientsGroupCountArgs, "select">
  ): Promise<number> {
    return this.prisma.optionsVarientsGroup.count(args);
  }

  async optionsVarientsGroups<
    T extends Prisma.OptionsVarientsGroupFindManyArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.OptionsVarientsGroupFindManyArgs>
  ): Promise<PrismaOptionsVarientsGroup[]> {
    return this.prisma.optionsVarientsGroup.findMany<Prisma.OptionsVarientsGroupFindManyArgs>(
      args
    );
  }
  async optionsVarientsGroup<
    T extends Prisma.OptionsVarientsGroupFindUniqueArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.OptionsVarientsGroupFindUniqueArgs>
  ): Promise<PrismaOptionsVarientsGroup | null> {
    return this.prisma.optionsVarientsGroup.findUnique(args);
  }
  async createOptionsVarientsGroup<
    T extends Prisma.OptionsVarientsGroupCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.OptionsVarientsGroupCreateArgs>
  ): Promise<PrismaOptionsVarientsGroup> {
    return this.prisma.optionsVarientsGroup.create<T>(args);
  }
  async updateOptionsVarientsGroup<
    T extends Prisma.OptionsVarientsGroupUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.OptionsVarientsGroupUpdateArgs>
  ): Promise<PrismaOptionsVarientsGroup> {
    return this.prisma.optionsVarientsGroup.update<T>(args);
  }
  async deleteOptionsVarientsGroup<
    T extends Prisma.OptionsVarientsGroupDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.OptionsVarientsGroupDeleteArgs>
  ): Promise<PrismaOptionsVarientsGroup> {
    return this.prisma.optionsVarientsGroup.delete(args);
  }

  async findOptionsVarientsItem(
    parentId: string,
    args: Prisma.OptionsVarientsItemFindManyArgs
  ): Promise<PrismaOptionsVarientsItem[]> {
    return this.prisma.optionsVarientsGroup
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .optionsVarientsItem(args);
  }

  async getMenuItemOptions(
    parentId: string
  ): Promise<PrismaMenuItemOption | null> {
    return this.prisma.optionsVarientsGroup
      .findUnique({
        where: { id: parentId },
      })
      .menuItemOptions();
  }
}