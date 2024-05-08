import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MenuItemIngredientModuleBase } from "./base/menuItemIngredient.module.base";
import { MenuItemIngredientService } from "./menuItemIngredient.service";
import { MenuItemIngredientController } from "./menuItemIngredient.controller";
import { MenuItemIngredientResolver } from "./menuItemIngredient.resolver";

@Module({
  imports: [MenuItemIngredientModuleBase, forwardRef(() => AuthModule)],
  controllers: [MenuItemIngredientController],
  providers: [MenuItemIngredientService, MenuItemIngredientResolver],
  exports: [MenuItemIngredientService],
})
export class MenuItemIngredientModule {}
