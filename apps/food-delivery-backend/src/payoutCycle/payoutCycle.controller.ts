import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PayoutCycleService } from "./payoutCycle.service";
import { PayoutCycleControllerBase } from "./base/payoutCycle.controller.base";

@swagger.ApiTags("payoutCycles")
@common.Controller("payoutCycles")
export class PayoutCycleController extends PayoutCycleControllerBase {
  constructor(
    protected readonly service: PayoutCycleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
