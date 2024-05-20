import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MenuItemsOptionsGroupServiceBase } from "./base/menuItemsOptionsGroup.service.base";

@Injectable()
export class MenuItemsOptionsGroupService extends MenuItemsOptionsGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
