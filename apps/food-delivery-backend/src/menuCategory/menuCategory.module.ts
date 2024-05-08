import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MenuCategoryModuleBase } from "./base/menuCategory.module.base";
import { MenuCategoryService } from "./menuCategory.service";
import { MenuCategoryController } from "./menuCategory.controller";
import { MenuCategoryResolver } from "./menuCategory.resolver";

@Module({
  imports: [MenuCategoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [MenuCategoryController],
  providers: [MenuCategoryService, MenuCategoryResolver],
  exports: [MenuCategoryService],
})
export class MenuCategoryModule {}
