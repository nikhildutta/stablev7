import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MenuItemsOptionsGroupModuleBase } from "./base/menuItemsOptionsGroup.module.base";
import { MenuItemsOptionsGroupService } from "./menuItemsOptionsGroup.service";
import { MenuItemsOptionsGroupController } from "./menuItemsOptionsGroup.controller";
import { MenuItemsOptionsGroupResolver } from "./menuItemsOptionsGroup.resolver";

@Module({
  imports: [MenuItemsOptionsGroupModuleBase, forwardRef(() => AuthModule)],
  controllers: [MenuItemsOptionsGroupController],
  providers: [MenuItemsOptionsGroupService, MenuItemsOptionsGroupResolver],
  exports: [MenuItemsOptionsGroupService],
})
export class MenuItemsOptionsGroupModule {}
