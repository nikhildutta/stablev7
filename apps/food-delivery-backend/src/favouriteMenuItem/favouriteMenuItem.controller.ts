import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FavouriteMenuItemService } from "./favouriteMenuItem.service";
import { FavouriteMenuItemControllerBase } from "./base/favouriteMenuItem.controller.base";

@swagger.ApiTags("favouriteMenuItems")
@common.Controller("favouriteMenuItems")
export class FavouriteMenuItemController extends FavouriteMenuItemControllerBase {
  constructor(
    protected readonly service: FavouriteMenuItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
