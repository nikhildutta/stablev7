import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MenuSubCategoryService } from "./menuSubCategory.service";
import { MenuSubCategoryControllerBase } from "./base/menuSubCategory.controller.base";

@swagger.ApiTags("menuSubCategories")
@common.Controller("menuSubCategories")
export class MenuSubCategoryController extends MenuSubCategoryControllerBase {
  constructor(
    protected readonly service: MenuSubCategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
