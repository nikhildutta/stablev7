import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MenuSubCategoryServiceBase } from "./base/menuSubCategory.service.base";

@Injectable()
export class MenuSubCategoryService extends MenuSubCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
