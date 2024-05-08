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
  PayoutInformationTable as PrismaPayoutInformationTable,
  Restaurant as PrismaRestaurant,
} from "@prisma/client";

export class PayoutInformationTableServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PayoutInformationTableCountArgs, "select">
  ): Promise<number> {
    return this.prisma.payoutInformationTable.count(args);
  }

  async payoutInformationTables<
    T extends Prisma.PayoutInformationTableFindManyArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.PayoutInformationTableFindManyArgs>
  ): Promise<PrismaPayoutInformationTable[]> {
    return this.prisma.payoutInformationTable.findMany<Prisma.PayoutInformationTableFindManyArgs>(
      args
    );
  }
  async payoutInformationTable<
    T extends Prisma.PayoutInformationTableFindUniqueArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.PayoutInformationTableFindUniqueArgs>
  ): Promise<PrismaPayoutInformationTable | null> {
    return this.prisma.payoutInformationTable.findUnique(args);
  }
  async createPayoutInformationTable<
    T extends Prisma.PayoutInformationTableCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.PayoutInformationTableCreateArgs>
  ): Promise<PrismaPayoutInformationTable> {
    return this.prisma.payoutInformationTable.create<T>(args);
  }
  async updatePayoutInformationTable<
    T extends Prisma.PayoutInformationTableUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.PayoutInformationTableUpdateArgs>
  ): Promise<PrismaPayoutInformationTable> {
    return this.prisma.payoutInformationTable.update<T>(args);
  }
  async deletePayoutInformationTable<
    T extends Prisma.PayoutInformationTableDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.PayoutInformationTableDeleteArgs>
  ): Promise<PrismaPayoutInformationTable> {
    return this.prisma.payoutInformationTable.delete(args);
  }

  async getRestaurants(parentId: string): Promise<PrismaRestaurant | null> {
    return this.prisma.payoutInformationTable
      .findUnique({
        where: { id: parentId },
      })
      .restaurants();
  }
}