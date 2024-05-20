import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ItemPackagingFeeService } from "./itemPackagingFee.service";
import { ItemPackagingFeeControllerBase } from "./base/itemPackagingFee.controller.base";

@swagger.ApiTags("itemPackagingFees")
@common.Controller("itemPackagingFees")
export class ItemPackagingFeeController extends ItemPackagingFeeControllerBase {
  constructor(
    protected readonly service: ItemPackagingFeeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
