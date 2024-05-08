import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DiscountWindowMapService } from "./discountWindowMap.service";
import { DiscountWindowMapControllerBase } from "./base/discountWindowMap.controller.base";

@swagger.ApiTags("discountWindowMaps")
@common.Controller("discountWindowMaps")
export class DiscountWindowMapController extends DiscountWindowMapControllerBase {
  constructor(
    protected readonly service: DiscountWindowMapService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
