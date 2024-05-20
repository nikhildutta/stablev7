import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ComboItemTableServiceBase } from "./base/comboItemTable.service.base";

@Injectable()
export class ComboItemTableService extends ComboItemTableServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
