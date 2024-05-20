import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MenuSubCategoryModuleBase } from "./base/menuSubCategory.module.base";
import { MenuSubCategoryService } from "./menuSubCategory.service";
import { MenuSubCategoryController } from "./menuSubCategory.controller";
import { MenuSubCategoryResolver } from "./menuSubCategory.resolver";

@Module({
  imports: [MenuSubCategoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [MenuSubCategoryController],
  providers: [MenuSubCategoryService, MenuSubCategoryResolver],
  exports: [MenuSubCategoryService],
})
export class MenuSubCategoryModule {}
