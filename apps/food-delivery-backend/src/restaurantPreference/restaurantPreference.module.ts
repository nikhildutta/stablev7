import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RestaurantPreferenceModuleBase } from "./base/restaurantPreference.module.base";
import { RestaurantPreferenceService } from "./restaurantPreference.service";
import { RestaurantPreferenceController } from "./restaurantPreference.controller";
import { RestaurantPreferenceResolver } from "./restaurantPreference.resolver";

@Module({
  imports: [RestaurantPreferenceModuleBase, forwardRef(() => AuthModule)],
  controllers: [RestaurantPreferenceController],
  providers: [RestaurantPreferenceService, RestaurantPreferenceResolver],
  exports: [RestaurantPreferenceService],
})
export class RestaurantPreferenceModule {}
