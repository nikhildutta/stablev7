import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OptionsVarientsItemServiceBase } from "./base/optionsVarientsItem.service.base";

@Injectable()
export class OptionsVarientsItemService extends OptionsVarientsItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
