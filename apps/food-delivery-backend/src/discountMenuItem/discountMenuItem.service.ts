import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DiscountMenuItemServiceBase } from "./base/discountMenuItem.service.base";

@Injectable()
export class DiscountMenuItemService extends DiscountMenuItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
