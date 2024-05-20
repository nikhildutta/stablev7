import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeliveryInstructionAddressMapServiceBase } from "./base/deliveryInstructionAddressMap.service.base";

@Injectable()
export class DeliveryInstructionAddressMapService extends DeliveryInstructionAddressMapServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
