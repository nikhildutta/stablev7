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
  AccountsAddressMap as PrismaAccountsAddressMap,
  Account as PrismaAccount,
  Address as PrismaAddress,
} from "@prisma/client";

export class AccountsAddressMapServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AccountsAddressMapCountArgs, "select">
  ): Promise<number> {
    return this.prisma.accountsAddressMap.count(args);
  }

  async accountsAddressMaps<T extends Prisma.AccountsAddressMapFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountsAddressMapFindManyArgs>
  ): Promise<PrismaAccountsAddressMap[]> {
    return this.prisma.accountsAddressMap.findMany<Prisma.AccountsAddressMapFindManyArgs>(
      args
    );
  }
  async accountsAddressMap<T extends Prisma.AccountsAddressMapFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountsAddressMapFindUniqueArgs>
  ): Promise<PrismaAccountsAddressMap | null> {
    return this.prisma.accountsAddressMap.findUnique(args);
  }
  async createAccountsAddressMap<T extends Prisma.AccountsAddressMapCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountsAddressMapCreateArgs>
  ): Promise<PrismaAccountsAddressMap> {
    return this.prisma.accountsAddressMap.create<T>(args);
  }
  async updateAccountsAddressMap<T extends Prisma.AccountsAddressMapUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountsAddressMapUpdateArgs>
  ): Promise<PrismaAccountsAddressMap> {
    return this.prisma.accountsAddressMap.update<T>(args);
  }
  async deleteAccountsAddressMap<T extends Prisma.AccountsAddressMapDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountsAddressMapDeleteArgs>
  ): Promise<PrismaAccountsAddressMap> {
    return this.prisma.accountsAddressMap.delete(args);
  }

  async getAccounts(parentId: string): Promise<PrismaAccount | null> {
    return this.prisma.accountsAddressMap
      .findUnique({
        where: { id: parentId },
      })
      .accounts();
  }

  async getAddresses(parentId: string): Promise<PrismaAddress | null> {
    return this.prisma.accountsAddressMap
      .findUnique({
        where: { id: parentId },
      })
      .addresses();
  }
}