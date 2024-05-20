import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MenuItemsOptionsGroupService } from "./menuItemsOptionsGroup.service";
import { MenuItemsOptionsGroupControllerBase } from "./base/menuItemsOptionsGroup.controller.base";

@swagger.ApiTags("menuItemsOptionsGroups")
@common.Controller("menuItemsOptionsGroups")
export class MenuItemsOptionsGroupController extends MenuItemsOptionsGroupControllerBase {
  constructor(
    protected readonly service: MenuItemsOptionsGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
