import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PayoutCycleServiceBase } from "./base/payoutCycle.service.base";

@Injectable()
export class PayoutCycleService extends PayoutCycleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
