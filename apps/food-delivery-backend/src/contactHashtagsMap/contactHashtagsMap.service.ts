import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContactHashtagsMapServiceBase } from "./base/contactHashtagsMap.service.base";

@Injectable()
export class ContactHashtagsMapService extends ContactHashtagsMapServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
