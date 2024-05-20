import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FavouriteRestaurantService } from "./favouriteRestaurant.service";
import { FavouriteRestaurantControllerBase } from "./base/favouriteRestaurant.controller.base";

@swagger.ApiTags("favouriteRestaurants")
@common.Controller("favouriteRestaurants")
export class FavouriteRestaurantController extends FavouriteRestaurantControllerBase {
  constructor(
    protected readonly service: FavouriteRestaurantService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
