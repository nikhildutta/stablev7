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
  DeliveryPartnerInstruction as PrismaDeliveryPartnerInstruction,
  DeliveryInstructionAddressMap as PrismaDeliveryInstructionAddressMap,
} from "@prisma/client";

export class DeliveryPartnerInstructionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DeliveryPartnerInstructionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.deliveryPartnerInstruction.count(args);
  }

  async deliveryPartnerInstructions<
    T extends Prisma.DeliveryPartnerInstructionFindManyArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.DeliveryPartnerInstructionFindManyArgs>
  ): Promise<PrismaDeliveryPartnerInstruction[]> {
    return this.prisma.deliveryPartnerInstruction.findMany<Prisma.DeliveryPartnerInstructionFindManyArgs>(
      args
    );
  }
  async deliveryPartnerInstruction<
    T extends Prisma.DeliveryPartnerInstructionFindUniqueArgs
  >(
    args: Prisma.SelectSubset<
      T,
      Prisma.DeliveryPartnerInstructionFindUniqueArgs
    >
  ): Promise<PrismaDeliveryPartnerInstruction | null> {
    return this.prisma.deliveryPartnerInstruction.findUnique(args);
  }
  async createDeliveryPartnerInstruction<
    T extends Prisma.DeliveryPartnerInstructionCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.DeliveryPartnerInstructionCreateArgs>
  ): Promise<PrismaDeliveryPartnerInstruction> {
    return this.prisma.deliveryPartnerInstruction.create<T>(args);
  }
  async updateDeliveryPartnerInstruction<
    T extends Prisma.DeliveryPartnerInstructionUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.DeliveryPartnerInstructionUpdateArgs>
  ): Promise<PrismaDeliveryPartnerInstruction> {
    return this.prisma.deliveryPartnerInstruction.update<T>(args);
  }
  async deleteDeliveryPartnerInstruction<
    T extends Prisma.DeliveryPartnerInstructionDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.DeliveryPartnerInstructionDeleteArgs>
  ): Promise<PrismaDeliveryPartnerInstruction> {
    return this.prisma.deliveryPartnerInstruction.delete(args);
  }

  async findDeliveryInstructionAddressMap(
    parentId: string,
    args: Prisma.DeliveryInstructionAddressMapFindManyArgs
  ): Promise<PrismaDeliveryInstructionAddressMap[]> {
    return this.prisma.deliveryPartnerInstruction
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .deliveryInstructionAddressMap(args);
  }
}