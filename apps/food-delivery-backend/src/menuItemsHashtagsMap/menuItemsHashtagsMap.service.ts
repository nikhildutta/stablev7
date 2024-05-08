import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MenuItemsHashtagsMapServiceBase } from "./base/menuItemsHashtagsMap.service.base";

@Injectable()
export class MenuItemsHashtagsMapService extends MenuItemsHashtagsMapServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
