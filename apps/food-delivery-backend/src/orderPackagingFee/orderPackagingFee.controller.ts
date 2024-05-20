import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OrderPackagingFeeService } from "./orderPackagingFee.service";
import { OrderPackagingFeeControllerBase } from "./base/orderPackagingFee.controller.base";

@swagger.ApiTags("orderPackagingFees")
@common.Controller("orderPackagingFees")
export class OrderPackagingFeeController extends OrderPackagingFeeControllerBase {
  constructor(
    protected readonly service: OrderPackagingFeeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
