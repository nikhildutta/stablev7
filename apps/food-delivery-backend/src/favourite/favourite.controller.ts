import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FavouriteService } from "./favourite.service";
import { FavouriteControllerBase } from "./base/favourite.controller.base";

@swagger.ApiTags("favourites")
@common.Controller("favourites")
export class FavouriteController extends FavouriteControllerBase {
  constructor(
    protected readonly service: FavouriteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
