import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RestaurantTimeWindowMapModuleBase } from "./base/restaurantTimeWindowMap.module.base";
import { RestaurantTimeWindowMapService } from "./restaurantTimeWindowMap.service";
import { RestaurantTimeWindowMapController } from "./restaurantTimeWindowMap.controller";
import { RestaurantTimeWindowMapResolver } from "./restaurantTimeWindowMap.resolver";

@Module({
  imports: [RestaurantTimeWindowMapModuleBase, forwardRef(() => AuthModule)],
  controllers: [RestaurantTimeWindowMapController],
  providers: [RestaurantTimeWindowMapService, RestaurantTimeWindowMapResolver],
  exports: [RestaurantTimeWindowMapService],
})
export class RestaurantTimeWindowMapModule {}
