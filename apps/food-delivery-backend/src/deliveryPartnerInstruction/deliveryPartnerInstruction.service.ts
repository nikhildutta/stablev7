import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeliveryPartnerInstructionServiceBase } from "./base/deliveryPartnerInstruction.service.base";

@Injectable()
export class DeliveryPartnerInstructionService extends DeliveryPartnerInstructionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
