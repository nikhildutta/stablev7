import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FavouriteRestaurantModuleBase } from "./base/favouriteRestaurant.module.base";
import { FavouriteRestaurantService } from "./favouriteRestaurant.service";
import { FavouriteRestaurantController } from "./favouriteRestaurant.controller";
import { FavouriteRestaurantResolver } from "./favouriteRestaurant.resolver";

@Module({
  imports: [FavouriteRestaurantModuleBase, forwardRef(() => AuthModule)],
  controllers: [FavouriteRestaurantController],
  providers: [FavouriteRestaurantService, FavouriteRestaurantResolver],
  exports: [FavouriteRestaurantService],
})
export class FavouriteRestaurantModule {}
