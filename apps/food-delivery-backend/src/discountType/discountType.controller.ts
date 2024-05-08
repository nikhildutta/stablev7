import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DiscountTypeService } from "./discountType.service";
import { DiscountTypeControllerBase } from "./base/discountType.controller.base";

@swagger.ApiTags("discountTypes")
@common.Controller("discountTypes")
export class DiscountTypeController extends DiscountTypeControllerBase {
  constructor(
    protected readonly service: DiscountTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
