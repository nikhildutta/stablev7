import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TimeWindowService } from "./timeWindow.service";
import { TimeWindowControllerBase } from "./base/timeWindow.controller.base";

@swagger.ApiTags("timeWindows")
@common.Controller("timeWindows")
export class TimeWindowController extends TimeWindowControllerBase {
  constructor(
    protected readonly service: TimeWindowService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
