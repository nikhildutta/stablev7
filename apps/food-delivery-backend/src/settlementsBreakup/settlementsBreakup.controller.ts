import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SettlementsBreakupService } from "./settlementsBreakup.service";
import { SettlementsBreakupControllerBase } from "./base/settlementsBreakup.controller.base";

@swagger.ApiTags("settlementsBreakups")
@common.Controller("settlementsBreakups")
export class SettlementsBreakupController extends SettlementsBreakupControllerBase {
  constructor(
    protected readonly service: SettlementsBreakupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
