import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ItemPackagingFeeServiceBase } from "./base/itemPackagingFee.service.base";

@Injectable()
export class ItemPackagingFeeService extends ItemPackagingFeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
