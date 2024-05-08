import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RestaurantsHashtagsMapService } from "./restaurantsHashtagsMap.service";
import { RestaurantsHashtagsMapControllerBase } from "./base/restaurantsHashtagsMap.controller.base";

@swagger.ApiTags("restaurantsHashtagsMaps")
@common.Controller("restaurantsHashtagsMaps")
export class RestaurantsHashtagsMapController extends RestaurantsHashtagsMapControllerBase {
  constructor(
    protected readonly service: RestaurantsHashtagsMapService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
