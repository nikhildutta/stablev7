import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrderPackagingFeeServiceBase } from "./base/orderPackagingFee.service.base";

@Injectable()
export class OrderPackagingFeeService extends OrderPackagingFeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
