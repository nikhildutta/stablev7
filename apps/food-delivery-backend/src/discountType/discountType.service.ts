import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DiscountTypeServiceBase } from "./base/discountType.service.base";

@Injectable()
export class DiscountTypeService extends DiscountTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
