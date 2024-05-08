import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MenuItemsWindowMapServiceBase } from "./base/menuItemsWindowMap.service.base";

@Injectable()
export class MenuItemsWindowMapService extends MenuItemsWindowMapServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
