import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MenuItemOptionService } from "./menuItemOption.service";
import { MenuItemOptionControllerBase } from "./base/menuItemOption.controller.base";

@swagger.ApiTags("menuItemOptions")
@common.Controller("menuItemOptions")
export class MenuItemOptionController extends MenuItemOptionControllerBase {
  constructor(
    protected readonly service: MenuItemOptionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
