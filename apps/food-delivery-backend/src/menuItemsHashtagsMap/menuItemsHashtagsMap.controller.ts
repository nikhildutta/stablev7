import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MenuItemsHashtagsMapService } from "./menuItemsHashtagsMap.service";
import { MenuItemsHashtagsMapControllerBase } from "./base/menuItemsHashtagsMap.controller.base";

@swagger.ApiTags("menuItemsHashtagsMaps")
@common.Controller("menuItemsHashtagsMaps")
export class MenuItemsHashtagsMapController extends MenuItemsHashtagsMapControllerBase {
  constructor(
    protected readonly service: MenuItemsHashtagsMapService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
