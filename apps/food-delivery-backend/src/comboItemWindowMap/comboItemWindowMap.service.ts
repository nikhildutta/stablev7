import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ComboItemWindowMapServiceBase } from "./base/comboItemWindowMap.service.base";

@Injectable()
export class ComboItemWindowMapService extends ComboItemWindowMapServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
