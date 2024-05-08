import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrderItemsAddonServiceBase } from "./base/orderItemsAddon.service.base";

@Injectable()
export class OrderItemsAddonService extends OrderItemsAddonServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
