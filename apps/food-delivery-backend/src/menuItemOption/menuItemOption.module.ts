import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MenuItemOptionModuleBase } from "./base/menuItemOption.module.base";
import { MenuItemOptionService } from "./menuItemOption.service";
import { MenuItemOptionController } from "./menuItemOption.controller";
import { MenuItemOptionResolver } from "./menuItemOption.resolver";

@Module({
  imports: [MenuItemOptionModuleBase, forwardRef(() => AuthModule)],
  controllers: [MenuItemOptionController],
  providers: [MenuItemOptionService, MenuItemOptionResolver],
  exports: [MenuItemOptionService],
})
export class MenuItemOptionModule {}
