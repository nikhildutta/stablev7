import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FavouriteModuleBase } from "./base/favourite.module.base";
import { FavouriteService } from "./favourite.service";
import { FavouriteController } from "./favourite.controller";
import { FavouriteResolver } from "./favourite.resolver";

@Module({
  imports: [FavouriteModuleBase, forwardRef(() => AuthModule)],
  controllers: [FavouriteController],
  providers: [FavouriteService, FavouriteResolver],
  exports: [FavouriteService],
})
export class FavouriteModule {}
