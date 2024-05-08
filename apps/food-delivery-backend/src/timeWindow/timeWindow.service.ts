import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TimeWindowServiceBase } from "./base/timeWindow.service.base";

@Injectable()
export class TimeWindowService extends TimeWindowServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
