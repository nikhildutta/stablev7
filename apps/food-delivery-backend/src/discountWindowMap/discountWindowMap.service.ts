import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DiscountWindowMapServiceBase } from "./base/discountWindowMap.service.base";

@Injectable()
export class DiscountWindowMapService extends DiscountWindowMapServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
