import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FavouriteMenuItemModuleBase } from "./base/favouriteMenuItem.module.base";
import { FavouriteMenuItemService } from "./favouriteMenuItem.service";
import { FavouriteMenuItemController } from "./favouriteMenuItem.controller";
import { FavouriteMenuItemResolver } from "./favouriteMenuItem.resolver";

@Module({
  imports: [FavouriteMenuItemModuleBase, forwardRef(() => AuthModule)],
  controllers: [FavouriteMenuItemController],
  providers: [FavouriteMenuItemService, FavouriteMenuItemResolver],
  exports: [FavouriteMenuItemService],
})
export class FavouriteMenuItemModule {}
