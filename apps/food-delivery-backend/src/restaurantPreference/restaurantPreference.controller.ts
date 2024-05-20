import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RestaurantPreferenceService } from "./restaurantPreference.service";
import { RestaurantPreferenceControllerBase } from "./base/restaurantPreference.controller.base";

@swagger.ApiTags("restaurantPreferences")
@common.Controller("restaurantPreferences")
export class RestaurantPreferenceController extends RestaurantPreferenceControllerBase {
  constructor(
    protected readonly service: RestaurantPreferenceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
