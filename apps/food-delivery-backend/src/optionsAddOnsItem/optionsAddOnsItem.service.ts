import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OptionsAddOnsItemServiceBase } from "./base/optionsAddOnsItem.service.base";

@Injectable()
export class OptionsAddOnsItemService extends OptionsAddOnsItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
