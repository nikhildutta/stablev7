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
  RestaurantsHashtagsMap as PrismaRestaurantsHashtagsMap,
  Hashtag as PrismaHashtag,
  Restaurant as PrismaRestaurant,
} from "@prisma/client";

export class RestaurantsHashtagsMapServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.RestaurantsHashtagsMapCountArgs, "select">
  ): Promise<number> {
    return this.prisma.restaurantsHashtagsMap.count(args);
  }

  async restaurantsHashtagsMaps<
    T extends Prisma.RestaurantsHashtagsMapFindManyArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.RestaurantsHashtagsMapFindManyArgs>
  ): Promise<PrismaRestaurantsHashtagsMap[]> {
    return this.prisma.restaurantsHashtagsMap.findMany<Prisma.RestaurantsHashtagsMapFindManyArgs>(
      args
    );
  }
  async restaurantsHashtagsMap<
    T extends Prisma.RestaurantsHashtagsMapFindUniqueArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.RestaurantsHashtagsMapFindUniqueArgs>
  ): Promise<PrismaRestaurantsHashtagsMap | null> {
    return this.prisma.restaurantsHashtagsMap.findUnique(args);
  }
  async createRestaurantsHashtagsMap<
    T extends Prisma.RestaurantsHashtagsMapCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.RestaurantsHashtagsMapCreateArgs>
  ): Promise<PrismaRestaurantsHashtagsMap> {
    return this.prisma.restaurantsHashtagsMap.create<T>(args);
  }
  async updateRestaurantsHashtagsMap<
    T extends Prisma.RestaurantsHashtagsMapUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.RestaurantsHashtagsMapUpdateArgs>
  ): Promise<PrismaRestaurantsHashtagsMap> {
    return this.prisma.restaurantsHashtagsMap.update<T>(args);
  }
  async deleteRestaurantsHashtagsMap<
    T extends Prisma.RestaurantsHashtagsMapDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.RestaurantsHashtagsMapDeleteArgs>
  ): Promise<PrismaRestaurantsHashtagsMap> {
    return this.prisma.restaurantsHashtagsMap.delete(args);
  }

  async getHashtags(parentId: string): Promise<PrismaHashtag | null> {
    return this.prisma.restaurantsHashtagsMap
      .findUnique({
        where: { id: parentId },
      })
      .hashtags();
  }

  async getRestaurants(parentId: string): Promise<PrismaRestaurant | null> {
    return this.prisma.restaurantsHashtagsMap
      .findUnique({
        where: { id: parentId },
      })
      .restaurants();
  }
}