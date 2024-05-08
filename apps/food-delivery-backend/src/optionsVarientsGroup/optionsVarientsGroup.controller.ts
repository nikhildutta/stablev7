import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OptionsVarientsGroupService } from "./optionsVarientsGroup.service";
import { OptionsVarientsGroupControllerBase } from "./base/optionsVarientsGroup.controller.base";

@swagger.ApiTags("optionsVarientsGroups")
@common.Controller("optionsVarientsGroups")
export class OptionsVarientsGroupController extends OptionsVarientsGroupControllerBase {
  constructor(
    protected readonly service: OptionsVarientsGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
