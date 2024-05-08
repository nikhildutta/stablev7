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
  UserCustomerLookup as PrismaUserCustomerLookup,
  AppUser as PrismaAppUser,
  Customer as PrismaCustomer,
} from "@prisma/client";

export class UserCustomerLookupServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UserCustomerLookupCountArgs, "select">
  ): Promise<number> {
    return this.prisma.userCustomerLookup.count(args);
  }

  async userCustomerLookups<T extends Prisma.UserCustomerLookupFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserCustomerLookupFindManyArgs>
  ): Promise<PrismaUserCustomerLookup[]> {
    return this.prisma.userCustomerLookup.findMany<Prisma.UserCustomerLookupFindManyArgs>(
      args
    );
  }
  async userCustomerLookup<T extends Prisma.UserCustomerLookupFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserCustomerLookupFindUniqueArgs>
  ): Promise<PrismaUserCustomerLookup | null> {
    return this.prisma.userCustomerLookup.findUnique(args);
  }
  async createUserCustomerLookup<T extends Prisma.UserCustomerLookupCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserCustomerLookupCreateArgs>
  ): Promise<PrismaUserCustomerLookup> {
    return this.prisma.userCustomerLookup.create<T>(args);
  }
  async updateUserCustomerLookup<T extends Prisma.UserCustomerLookupUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserCustomerLookupUpdateArgs>
  ): Promise<PrismaUserCustomerLookup> {
    return this.prisma.userCustomerLookup.update<T>(args);
  }
  async deleteUserCustomerLookup<T extends Prisma.UserCustomerLookupDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserCustomerLookupDeleteArgs>
  ): Promise<PrismaUserCustomerLookup> {
    return this.prisma.userCustomerLookup.delete(args);
  }

  async getAppUsers(parentId: string): Promise<PrismaAppUser | null> {
    return this.prisma.userCustomerLookup
      .findUnique({
        where: { id: parentId },
      })
      .appUsers();
  }

  async getCustomers(parentId: string): Promise<PrismaCustomer | null> {
    return this.prisma.userCustomerLookup
      .findUnique({
        where: { id: parentId },
      })
      .customers();
  }
}