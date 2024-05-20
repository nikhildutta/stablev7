import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ComboGroupServiceBase } from "./base/comboGroup.service.base";

@Injectable()
export class ComboGroupService extends ComboGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
