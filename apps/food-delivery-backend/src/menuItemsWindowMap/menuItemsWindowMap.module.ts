import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MenuItemsWindowMapModuleBase } from "./base/menuItemsWindowMap.module.base";
import { MenuItemsWindowMapService } from "./menuItemsWindowMap.service";
import { MenuItemsWindowMapController } from "./menuItemsWindowMap.controller";
import { MenuItemsWindowMapResolver } from "./menuItemsWindowMap.resolver";

@Module({
  imports: [MenuItemsWindowMapModuleBase, forwardRef(() => AuthModule)],
  controllers: [MenuItemsWindowMapController],
  providers: [MenuItemsWindowMapService, MenuItemsWindowMapResolver],
  exports: [MenuItemsWindowMapService],
})
export class MenuItemsWindowMapModule {}
