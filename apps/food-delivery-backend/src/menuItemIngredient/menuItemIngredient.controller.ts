import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MenuItemIngredientService } from "./menuItemIngredient.service";
import { MenuItemIngredientControllerBase } from "./base/menuItemIngredient.controller.base";

@swagger.ApiTags("menuItemIngredients")
@common.Controller("menuItemIngredients")
export class MenuItemIngredientController extends MenuItemIngredientControllerBase {
  constructor(
    protected readonly service: MenuItemIngredientService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
