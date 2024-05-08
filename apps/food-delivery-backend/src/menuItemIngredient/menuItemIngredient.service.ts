import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MenuItemIngredientServiceBase } from "./base/menuItemIngredient.service.base";

@Injectable()
export class MenuItemIngredientService extends MenuItemIngredientServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
