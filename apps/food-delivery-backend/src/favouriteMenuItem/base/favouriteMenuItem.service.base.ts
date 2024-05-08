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
  FavouriteMenuItem as PrismaFavouriteMenuItem,
  Favourite as PrismaFavourite,
  MenuItem as PrismaMenuItem,
} from "@prisma/client";

export class FavouriteMenuItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.FavouriteMenuItemCountArgs, "select">
  ): Promise<number> {
    return this.prisma.favouriteMenuItem.count(args);
  }

  async favouriteMenuItems<T extends Prisma.FavouriteMenuItemFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FavouriteMenuItemFindManyArgs>
  ): Promise<PrismaFavouriteMenuItem[]> {
    return this.prisma.favouriteMenuItem.findMany<Prisma.FavouriteMenuItemFindManyArgs>(
      args
    );
  }
  async favouriteMenuItem<T extends Prisma.FavouriteMenuItemFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FavouriteMenuItemFindUniqueArgs>
  ): Promise<PrismaFavouriteMenuItem | null> {
    return this.prisma.favouriteMenuItem.findUnique(args);
  }
  async createFavouriteMenuItem<T extends Prisma.FavouriteMenuItemCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FavouriteMenuItemCreateArgs>
  ): Promise<PrismaFavouriteMenuItem> {
    return this.prisma.favouriteMenuItem.create<T>(args);
  }
  async updateFavouriteMenuItem<T extends Prisma.FavouriteMenuItemUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FavouriteMenuItemUpdateArgs>
  ): Promise<PrismaFavouriteMenuItem> {
    return this.prisma.favouriteMenuItem.update<T>(args);
  }
  async deleteFavouriteMenuItem<T extends Prisma.FavouriteMenuItemDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FavouriteMenuItemDeleteArgs>
  ): Promise<PrismaFavouriteMenuItem> {
    return this.prisma.favouriteMenuItem.delete(args);
  }

  async getFavourites(parentId: string): Promise<PrismaFavourite | null> {
    return this.prisma.favouriteMenuItem
      .findUnique({
        where: { id: parentId },
      })
      .favourites();
  }

  async getMenuItems(parentId: string): Promise<PrismaMenuItem | null> {
    return this.prisma.favouriteMenuItem
      .findUnique({
        where: { id: parentId },
      })
      .menuItems();
  }
}