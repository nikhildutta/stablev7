import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DailyMenuItemStockServiceBase } from "./base/dailyMenuItemStock.service.base";

@Injectable()
export class DailyMenuItemStockService extends DailyMenuItemStockServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
