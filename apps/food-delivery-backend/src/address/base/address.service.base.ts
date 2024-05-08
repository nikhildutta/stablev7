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
  Address as PrismaAddress,
  AccountsAddressMap as PrismaAccountsAddressMap,
  ContactDetail as PrismaContactDetail,
  CustomerAddressMap as PrismaCustomerAddressMap,
  DeliveryInstructionAddressMap as PrismaDeliveryInstructionAddressMap,
  GeoLocation as PrismaGeoLocation,
  OrderHistory as PrismaOrderHistory,
} from "@prisma/client";

export class AddressServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AddressCountArgs, "select">): Promise<number> {
    return this.prisma.address.count(args);
  }

  async addresses<T extends Prisma.AddressFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AddressFindManyArgs>
  ): Promise<PrismaAddress[]> {
    return this.prisma.address.findMany<Prisma.AddressFindManyArgs>(args);
  }
  async address<T extends Prisma.AddressFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AddressFindUniqueArgs>
  ): Promise<PrismaAddress | null> {
    return this.prisma.address.findUnique(args);
  }
  async createAddress<T extends Prisma.AddressCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AddressCreateArgs>
  ): Promise<PrismaAddress> {
    return this.prisma.address.create<T>(args);
  }
  async updateAddress<T extends Prisma.AddressUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AddressUpdateArgs>
  ): Promise<PrismaAddress> {
    return this.prisma.address.update<T>(args);
  }
  async deleteAddress<T extends Prisma.AddressDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AddressDeleteArgs>
  ): Promise<PrismaAddress> {
    return this.prisma.address.delete(args);
  }

  async findAccountsAddressMap(
    parentId: string,
    args: Prisma.AccountsAddressMapFindManyArgs
  ): Promise<PrismaAccountsAddressMap[]> {
    return this.prisma.address
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .accountsAddressMap(args);
  }

  async findContactDetails(
    parentId: string,
    args: Prisma.ContactDetailFindManyArgs
  ): Promise<PrismaContactDetail[]> {
    return this.prisma.address
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .contactDetails(args);
  }

  async findCustomerAddressMap(
    parentId: string,
    args: Prisma.CustomerAddressMapFindManyArgs
  ): Promise<PrismaCustomerAddressMap[]> {
    return this.prisma.address
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .customerAddressMap(args);
  }

  async findDeliveryInstructionAddressMap(
    parentId: string,
    args: Prisma.DeliveryInstructionAddressMapFindManyArgs
  ): Promise<PrismaDeliveryInstructionAddressMap[]> {
    return this.prisma.address
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .deliveryInstructionAddressMap(args);
  }

  async findGeoLocations(
    parentId: string,
    args: Prisma.GeoLocationFindManyArgs
  ): Promise<PrismaGeoLocation[]> {
    return this.prisma.address
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .geoLocations(args);
  }

  async findOrderHistory(
    parentId: string,
    args: Prisma.OrderHistoryFindManyArgs
  ): Promise<PrismaOrderHistory[]> {
    return this.prisma.address
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .orderHistory(args);
  }
}