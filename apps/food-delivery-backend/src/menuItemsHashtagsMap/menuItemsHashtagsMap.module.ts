import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MenuItemsHashtagsMapModuleBase } from "./base/menuItemsHashtagsMap.module.base";
import { MenuItemsHashtagsMapService } from "./menuItemsHashtagsMap.service";
import { MenuItemsHashtagsMapController } from "./menuItemsHashtagsMap.controller";
import { MenuItemsHashtagsMapResolver } from "./menuItemsHashtagsMap.resolver";

@Module({
  imports: [MenuItemsHashtagsMapModuleBase, forwardRef(() => AuthModule)],
  controllers: [MenuItemsHashtagsMapController],
  providers: [MenuItemsHashtagsMapService, MenuItemsHashtagsMapResolver],
  exports: [MenuItemsHashtagsMapService],
})
export class MenuItemsHashtagsMapModule {}
