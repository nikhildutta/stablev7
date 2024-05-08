import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MerchantInvoiceServiceBase } from "./base/merchantInvoice.service.base";

@Injectable()
export class MerchantInvoiceService extends MerchantInvoiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
