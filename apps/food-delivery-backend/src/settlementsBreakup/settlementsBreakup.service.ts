import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SettlementsBreakupServiceBase } from "./base/settlementsBreakup.service.base";

@Injectable()
export class SettlementsBreakupService extends SettlementsBreakupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
