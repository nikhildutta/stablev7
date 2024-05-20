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
  MenuItemsHashtagsMap as PrismaMenuItemsHashtagsMap,
  Hashtag as PrismaHashtag,
  MenuItem as PrismaMenuItem,
} from "@prisma/client";

export class MenuItemsHashtagsMapServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.MenuItemsHashtagsMapCountArgs, "select">
  ): Promise<number> {
    return this.prisma.menuItemsHashtagsMap.count(args);
  }

  async menuItemsHashtagsMaps<
    T extends Prisma.MenuItemsHashtagsMapFindManyArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.MenuItemsHashtagsMapFindManyArgs>
  ): Promise<PrismaMenuItemsHashtagsMap[]> {
    return this.prisma.menuItemsHashtagsMap.findMany<Prisma.MenuItemsHashtagsMapFindManyArgs>(
      args
    );
  }
  async menuItemsHashtagsMap<
    T extends Prisma.MenuItemsHashtagsMapFindUniqueArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.MenuItemsHashtagsMapFindUniqueArgs>
  ): Promise<PrismaMenuItemsHashtagsMap | null> {
    return this.prisma.menuItemsHashtagsMap.findUnique(args);
  }
  async createMenuItemsHashtagsMap<
    T extends Prisma.MenuItemsHashtagsMapCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.MenuItemsHashtagsMapCreateArgs>
  ): Promise<PrismaMenuItemsHashtagsMap> {
    return this.prisma.menuItemsHashtagsMap.create<T>(args);
  }
  async updateMenuItemsHashtagsMap<
    T extends Prisma.MenuItemsHashtagsMapUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.MenuItemsHashtagsMapUpdateArgs>
  ): Promise<PrismaMenuItemsHashtagsMap> {
    return this.prisma.menuItemsHashtagsMap.update<T>(args);
  }
  async deleteMenuItemsHashtagsMap<
    T extends Prisma.MenuItemsHashtagsMapDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.MenuItemsHashtagsMapDeleteArgs>
  ): Promise<PrismaMenuItemsHashtagsMap> {
    return this.prisma.menuItemsHashtagsMap.delete(args);
  }

  async getHashtags(parentId: string): Promise<PrismaHashtag | null> {
    return this.prisma.menuItemsHashtagsMap
      .findUnique({
        where: { id: parentId },
      })
      .hashtags();
  }

  async getMenuItems(parentId: string): Promise<PrismaMenuItem | null> {
    return this.prisma.menuItemsHashtagsMap
      .findUnique({
        where: { id: parentId },
      })
      .menuItems();
  }
}
