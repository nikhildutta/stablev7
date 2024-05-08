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
  AppUser as PrismaAppUser,
  AccessLog as PrismaAccessLog,
  CouponRedemption as PrismaCouponRedemption,
  CustomerPreference as PrismaCustomerPreference,
  CustomerSubscription as PrismaCustomerSubscription,
  ErrorLog as PrismaErrorLog,
  Favourite as PrismaFavourite,
  Notification as PrismaNotification,
  NotificationSetting as PrismaNotificationSetting,
  OrderHistory as PrismaOrderHistory,
  Report as PrismaReport,
  Reservation as PrismaReservation,
  Reward as PrismaReward,
  SettlementsBreakup as PrismaSettlementsBreakup,
  SsoLookup as PrismaSsoLookup,
  Subscription as PrismaSubscription,
  UserCustomerLookup as PrismaUserCustomerLookup,
  UserFeedback as PrismaUserFeedback,
  UsersHashtagsMap as PrismaUsersHashtagsMap,
} from "@prisma/client";

export class AppUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AppUserCountArgs, "select">): Promise<number> {
    return this.prisma.appUser.count(args);
  }

  async appUsers<T extends Prisma.AppUserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppUserFindManyArgs>
  ): Promise<PrismaAppUser[]> {
    return this.prisma.appUser.findMany<Prisma.AppUserFindManyArgs>(args);
  }
  async appUser<T extends Prisma.AppUserFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppUserFindUniqueArgs>
  ): Promise<PrismaAppUser | null> {
    return this.prisma.appUser.findUnique(args);
  }
  async createAppUser<T extends Prisma.AppUserCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppUserCreateArgs>
  ): Promise<PrismaAppUser> {
    return this.prisma.appUser.create<T>(args);
  }
  async updateAppUser<T extends Prisma.AppUserUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppUserUpdateArgs>
  ): Promise<PrismaAppUser> {
    return this.prisma.appUser.update<T>(args);
  }
  async deleteAppUser<T extends Prisma.AppUserDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppUserDeleteArgs>
  ): Promise<PrismaAppUser> {
    return this.prisma.appUser.delete(args);
  }

  async findAccessLogs(
    parentId: string,
    args: Prisma.AccessLogFindManyArgs
  ): Promise<PrismaAccessLog[]> {
    return this.prisma.appUser
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .accessLogs(args);
  }

  async findCouponRedemptions(
    parentId: string,
    args: Prisma.CouponRedemptionFindManyArgs
  ): Promise<PrismaCouponRedemption[]> {
    return this.prisma.appUser
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .couponRedemptions(args);
  }

  async findCustomerPreferences(
    parentId: string,
    args: Prisma.CustomerPreferenceFindManyArgs
  ): Promise<PrismaCustomerPreference[]> {
    return this.prisma.appUser
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .customerPreferences(args);
  }

  async findCustomerSubscriptions(
    parentId: string,
    args: Prisma.CustomerSubscriptionFindManyArgs
  ): Promise<PrismaCustomerSubscription[]> {
    return this.prisma.appUser
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .customerSubscriptions(args);
  }

  async findErrorLogs(
    parentId: string,
    args: Prisma.ErrorLogFindManyArgs
  ): Promise<PrismaErrorLog[]> {
    return this.prisma.appUser
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .errorLogs(args);
  }

  async findFavourites(
    parentId: string,
    args: Prisma.FavouriteFindManyArgs
  ): Promise<PrismaFavourite[]> {
    return this.prisma.appUser
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .favourites(args);
  }

  async findNotifications(
    parentId: string,
    args: Prisma.NotificationFindManyArgs
  ): Promise<PrismaNotification[]> {
    return this.prisma.appUser
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .notifications(args);
  }

  async findNotificationSettings(
    parentId: string,
    args: Prisma.NotificationSettingFindManyArgs
  ): Promise<PrismaNotificationSetting[]> {
    return this.prisma.appUser
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .notificationSettings(args);
  }

  async findOrderHistory(
    parentId: string,
    args: Prisma.OrderHistoryFindManyArgs
  ): Promise<PrismaOrderHistory[]> {
    return this.prisma.appUser
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .orderHistory(args);
  }

  async findReports(
    parentId: string,
    args: Prisma.ReportFindManyArgs
  ): Promise<PrismaReport[]> {
    return this.prisma.appUser
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .reports(args);
  }

  async findReservations(
    parentId: string,
    args: Prisma.ReservationFindManyArgs
  ): Promise<PrismaReservation[]> {
    return this.prisma.appUser
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .reservations(args);
  }

  async findRewards(
    parentId: string,
    args: Prisma.RewardFindManyArgs
  ): Promise<PrismaReward[]> {
    return this.prisma.appUser
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .rewards(args);
  }

  async findSettlementsBreakup(
    parentId: string,
    args: Prisma.SettlementsBreakupFindManyArgs
  ): Promise<PrismaSettlementsBreakup[]> {
    return this.prisma.appUser
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .settlementsBreakup(args);
  }

  async findSsoLookup(
    parentId: string,
    args: Prisma.SsoLookupFindManyArgs
  ): Promise<PrismaSsoLookup[]> {
    return this.prisma.appUser
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .ssoLookup(args);
  }

  async findSubscriptions(
    parentId: string,
    args: Prisma.SubscriptionFindManyArgs
  ): Promise<PrismaSubscription[]> {
    return this.prisma.appUser
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .subscriptions(args);
  }

  async findUserCustomerLookup(
    parentId: string,
    args: Prisma.UserCustomerLookupFindManyArgs
  ): Promise<PrismaUserCustomerLookup[]> {
    return this.prisma.appUser
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .userCustomerLookup(args);
  }

  async findUserFeedbacks(
    parentId: string,
    args: Prisma.UserFeedbackFindManyArgs
  ): Promise<PrismaUserFeedback[]> {
    return this.prisma.appUser
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .userFeedbacks(args);
  }

  async findUsersHashtagsMap(
    parentId: string,
    args: Prisma.UsersHashtagsMapFindManyArgs
  ): Promise<PrismaUsersHashtagsMap[]> {
    return this.prisma.appUser
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .usersHashtagsMap(args);
  }
}