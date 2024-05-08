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
  Restaurant as PrismaRestaurant,
  AccountRestaurantLookup as PrismaAccountRestaurantLookup,
  ComboGroup as PrismaComboGroup,
  FavouriteRestaurant as PrismaFavouriteRestaurant,
  MenuCategory as PrismaMenuCategory,
  MerchantInvoice as PrismaMerchantInvoice,
  OrderHistory as PrismaOrderHistory,
  OrderPackagingFee as PrismaOrderPackagingFee,
  PayoutCycle as PrismaPayoutCycle,
  PayoutInformationTable as PrismaPayoutInformationTable,
  PortalUsersRelationsLookup as PrismaPortalUsersRelationsLookup,
  Reservation as PrismaReservation,
  RestaurantDetail as PrismaRestaurantDetail,
  RestaurantPreference as PrismaRestaurantPreference,
  RestaurantsHashtagsMap as PrismaRestaurantsHashtagsMap,
  RestaurantTimeWindowMap as PrismaRestaurantTimeWindowMap,
  TaxRateInformation as PrismaTaxRateInformation,
} from "@prisma/client";

export class RestaurantServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.RestaurantCountArgs, "select">
  ): Promise<number> {
    return this.prisma.restaurant.count(args);
  }

  async restaurants<T extends Prisma.RestaurantFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RestaurantFindManyArgs>
  ): Promise<PrismaRestaurant[]> {
    return this.prisma.restaurant.findMany<Prisma.RestaurantFindManyArgs>(args);
  }
  async restaurant<T extends Prisma.RestaurantFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RestaurantFindUniqueArgs>
  ): Promise<PrismaRestaurant | null> {
    return this.prisma.restaurant.findUnique(args);
  }
  async createRestaurant<T extends Prisma.RestaurantCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RestaurantCreateArgs>
  ): Promise<PrismaRestaurant> {
    return this.prisma.restaurant.create<T>(args);
  }
  async updateRestaurant<T extends Prisma.RestaurantUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RestaurantUpdateArgs>
  ): Promise<PrismaRestaurant> {
    return this.prisma.restaurant.update<T>(args);
  }
  async deleteRestaurant<T extends Prisma.RestaurantDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RestaurantDeleteArgs>
  ): Promise<PrismaRestaurant> {
    return this.prisma.restaurant.delete(args);
  }

  async findAccountRestaurantLookup(
    parentId: string,
    args: Prisma.AccountRestaurantLookupFindManyArgs
  ): Promise<PrismaAccountRestaurantLookup[]> {
    return this.prisma.restaurant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .accountRestaurantLookup(args);
  }

  async findComboGroups(
    parentId: string,
    args: Prisma.ComboGroupFindManyArgs
  ): Promise<PrismaComboGroup[]> {
    return this.prisma.restaurant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .comboGroups(args);
  }

  async findFavouriteRestaurant(
    parentId: string,
    args: Prisma.FavouriteRestaurantFindManyArgs
  ): Promise<PrismaFavouriteRestaurant[]> {
    return this.prisma.restaurant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .favouriteRestaurant(args);
  }

  async findMenuCategories(
    parentId: string,
    args: Prisma.MenuCategoryFindManyArgs
  ): Promise<PrismaMenuCategory[]> {
    return this.prisma.restaurant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .menuCategories(args);
  }

  async findMerchantInvoices(
    parentId: string,
    args: Prisma.MerchantInvoiceFindManyArgs
  ): Promise<PrismaMerchantInvoice[]> {
    return this.prisma.restaurant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .merchantInvoices(args);
  }

  async findOrderHistory(
    parentId: string,
    args: Prisma.OrderHistoryFindManyArgs
  ): Promise<PrismaOrderHistory[]> {
    return this.prisma.restaurant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .orderHistory(args);
  }

  async findOrderPackagingFee(
    parentId: string,
    args: Prisma.OrderPackagingFeeFindManyArgs
  ): Promise<PrismaOrderPackagingFee[]> {
    return this.prisma.restaurant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .orderPackagingFee(args);
  }

  async findPayoutCycles(
    parentId: string,
    args: Prisma.PayoutCycleFindManyArgs
  ): Promise<PrismaPayoutCycle[]> {
    return this.prisma.restaurant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .payoutCycles(args);
  }

  async findPayoutInformationTable(
    parentId: string,
    args: Prisma.PayoutInformationTableFindManyArgs
  ): Promise<PrismaPayoutInformationTable[]> {
    return this.prisma.restaurant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .payoutInformationTable(args);
  }

  async findPortalUsersRelationsLookup(
    parentId: string,
    args: Prisma.PortalUsersRelationsLookupFindManyArgs
  ): Promise<PrismaPortalUsersRelationsLookup[]> {
    return this.prisma.restaurant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .portalUsersRelationsLookup(args);
  }

  async findReservations(
    parentId: string,
    args: Prisma.ReservationFindManyArgs
  ): Promise<PrismaReservation[]> {
    return this.prisma.restaurant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .reservations(args);
  }

  async findRestaurantDetails(
    parentId: string,
    args: Prisma.RestaurantDetailFindManyArgs
  ): Promise<PrismaRestaurantDetail[]> {
    return this.prisma.restaurant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .restaurantDetails(args);
  }

  async findRestaurantPreferences(
    parentId: string,
    args: Prisma.RestaurantPreferenceFindManyArgs
  ): Promise<PrismaRestaurantPreference[]> {
    return this.prisma.restaurant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .restaurantPreferences(args);
  }

  async findRestaurantsHashtagsMap(
    parentId: string,
    args: Prisma.RestaurantsHashtagsMapFindManyArgs
  ): Promise<PrismaRestaurantsHashtagsMap[]> {
    return this.prisma.restaurant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .restaurantsHashtagsMap(args);
  }

  async findRestaurantTimeWindowMap(
    parentId: string,
    args: Prisma.RestaurantTimeWindowMapFindManyArgs
  ): Promise<PrismaRestaurantTimeWindowMap[]> {
    return this.prisma.restaurant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .restaurantTimeWindowMap(args);
  }

  async findTaxRateInformation(
    parentId: string,
    args: Prisma.TaxRateInformationFindManyArgs
  ): Promise<PrismaTaxRateInformation[]> {
    return this.prisma.restaurant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .taxRateInformation(args);
  }
}