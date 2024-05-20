import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OptionsVarientsGroupServiceBase } from "./base/optionsVarientsGroup.service.base";

@Injectable()
export class OptionsVarientsGroupService extends OptionsVarientsGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
