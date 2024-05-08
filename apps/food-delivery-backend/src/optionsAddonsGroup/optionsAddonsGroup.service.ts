import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OptionsAddonsGroupServiceBase } from "./base/optionsAddonsGroup.service.base";

@Injectable()
export class OptionsAddonsGroupService extends OptionsAddonsGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
