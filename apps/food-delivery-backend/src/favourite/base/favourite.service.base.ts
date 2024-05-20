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
  Favourite as PrismaFavourite,
  FavouriteMenuItem as PrismaFavouriteMenuItem,
  FavouriteRestaurant as PrismaFavouriteRestaurant,
  AppUser as PrismaAppUser,
} from "@prisma/client";

export class FavouriteServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.FavouriteCountArgs, "select">
  ): Promise<number> {
    return this.prisma.favourite.count(args);
  }

  async favourites<T extends Prisma.FavouriteFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FavouriteFindManyArgs>
  ): Promise<PrismaFavourite[]> {
    return this.prisma.favourite.findMany<Prisma.FavouriteFindManyArgs>(args);
  }
  async favourite<T extends Prisma.FavouriteFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FavouriteFindUniqueArgs>
  ): Promise<PrismaFavourite | null> {
    return this.prisma.favourite.findUnique(args);
  }
  async createFavourite<T extends Prisma.FavouriteCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FavouriteCreateArgs>
  ): Promise<PrismaFavourite> {
    return this.prisma.favourite.create<T>(args);
  }
  async updateFavourite<T extends Prisma.FavouriteUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FavouriteUpdateArgs>
  ): Promise<PrismaFavourite> {
    return this.prisma.favourite.update<T>(args);
  }
  async deleteFavourite<T extends Prisma.FavouriteDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FavouriteDeleteArgs>
  ): Promise<PrismaFavourite> {
    return this.prisma.favourite.delete(args);
  }

  async findFavouriteMenuItems(
    parentId: string,
    args: Prisma.FavouriteMenuItemFindManyArgs
  ): Promise<PrismaFavouriteMenuItem[]> {
    return this.prisma.favourite
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .favouriteMenuItems(args);
  }

  async findFavouriteRestaurant(
    parentId: string,
    args: Prisma.FavouriteRestaurantFindManyArgs
  ): Promise<PrismaFavouriteRestaurant[]> {
    return this.prisma.favourite
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .favouriteRestaurant(args);
  }

  async getAppUsers(parentId: string): Promise<PrismaAppUser | null> {
    return this.prisma.favourite
      .findUnique({
        where: { id: parentId },
      })
      .appUsers();
  }
}
