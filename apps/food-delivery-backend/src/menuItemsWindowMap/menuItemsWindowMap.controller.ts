import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MenuItemsWindowMapService } from "./menuItemsWindowMap.service";
import { MenuItemsWindowMapControllerBase } from "./base/menuItemsWindowMap.controller.base";

@swagger.ApiTags("menuItemsWindowMaps")
@common.Controller("menuItemsWindowMaps")
export class MenuItemsWindowMapController extends MenuItemsWindowMapControllerBase {
  constructor(
    protected readonly service: MenuItemsWindowMapService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
