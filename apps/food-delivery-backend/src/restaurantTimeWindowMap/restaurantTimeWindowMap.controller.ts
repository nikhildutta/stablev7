import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RestaurantTimeWindowMapService } from "./restaurantTimeWindowMap.service";
import { RestaurantTimeWindowMapControllerBase } from "./base/restaurantTimeWindowMap.controller.base";

@swagger.ApiTags("restaurantTimeWindowMaps")
@common.Controller("restaurantTimeWindowMaps")
export class RestaurantTimeWindowMapController extends RestaurantTimeWindowMapControllerBase {
  constructor(
    protected readonly service: RestaurantTimeWindowMapService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
