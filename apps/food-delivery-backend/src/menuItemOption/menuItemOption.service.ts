import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MenuItemOptionServiceBase } from "./base/menuItemOption.service.base";

@Injectable()
export class MenuItemOptionService extends MenuItemOptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
