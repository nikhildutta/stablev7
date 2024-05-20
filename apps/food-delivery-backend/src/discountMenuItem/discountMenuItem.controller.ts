import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DiscountMenuItemService } from "./discountMenuItem.service";
import { DiscountMenuItemControllerBase } from "./base/discountMenuItem.controller.base";

@swagger.ApiTags("discountMenuItems")
@common.Controller("discountMenuItems")
export class DiscountMenuItemController extends DiscountMenuItemControllerBase {
  constructor(
    protected readonly service: DiscountMenuItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
