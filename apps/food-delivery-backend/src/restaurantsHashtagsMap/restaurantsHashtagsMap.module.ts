import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RestaurantsHashtagsMapModuleBase } from "./base/restaurantsHashtagsMap.module.base";
import { RestaurantsHashtagsMapService } from "./restaurantsHashtagsMap.service";
import { RestaurantsHashtagsMapController } from "./restaurantsHashtagsMap.controller";
import { RestaurantsHashtagsMapResolver } from "./restaurantsHashtagsMap.resolver";

@Module({
  imports: [RestaurantsHashtagsMapModuleBase, forwardRef(() => AuthModule)],
  controllers: [RestaurantsHashtagsMapController],
  providers: [RestaurantsHashtagsMapService, RestaurantsHashtagsMapResolver],
  exports: [RestaurantsHashtagsMapService],
})
export class RestaurantsHashtagsMapModule {}
