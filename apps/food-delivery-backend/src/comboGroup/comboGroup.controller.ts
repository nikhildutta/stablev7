import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ComboGroupService } from "./comboGroup.service";
import { ComboGroupControllerBase } from "./base/comboGroup.controller.base";

@swagger.ApiTags("comboGroups")
@common.Controller("comboGroups")
export class ComboGroupController extends ComboGroupControllerBase {
  constructor(
    protected readonly service: ComboGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
