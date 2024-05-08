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
  RestaurantPreference as PrismaRestaurantPreference,
  Restaurant as PrismaRestaurant,
} from "@prisma/client";

export class RestaurantPreferenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.RestaurantPreferenceCountArgs, "select">
  ): Promise<number> {
    return this.prisma.restaurantPreference.count(args);
  }

  async restaurantPreferences<
    T extends Prisma.RestaurantPreferenceFindManyArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.RestaurantPreferenceFindManyArgs>
  ): Promise<PrismaRestaurantPreference[]> {
    return this.prisma.restaurantPreference.findMany<Prisma.RestaurantPreferenceFindManyArgs>(
      args
    );
  }
  async restaurantPreference<
    T extends Prisma.RestaurantPreferenceFindUniqueArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.RestaurantPreferenceFindUniqueArgs>
  ): Promise<PrismaRestaurantPreference | null> {
    return this.prisma.restaurantPreference.findUnique(args);
  }
  async createRestaurantPreference<
    T extends Prisma.RestaurantPreferenceCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.RestaurantPreferenceCreateArgs>
  ): Promise<PrismaRestaurantPreference> {
    return this.prisma.restaurantPreference.create<T>(args);
  }
  async updateRestaurantPreference<
    T extends Prisma.RestaurantPreferenceUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.RestaurantPreferenceUpdateArgs>
  ): Promise<PrismaRestaurantPreference> {
    return this.prisma.restaurantPreference.update<T>(args);
  }
  async deleteRestaurantPreference<
    T extends Prisma.RestaurantPreferenceDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.RestaurantPreferenceDeleteArgs>
  ): Promise<PrismaRestaurantPreference> {
    return this.prisma.restaurantPreference.delete(args);
  }

  async getRestaurants(parentId: string): Promise<PrismaRestaurant | null> {
    return this.prisma.restaurantPreference
      .findUnique({
        where: { id: parentId },
      })
      .restaurants();
  }
}