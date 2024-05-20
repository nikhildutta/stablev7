import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OptionsAddonsGroupService } from "./optionsAddonsGroup.service";
import { OptionsAddonsGroupControllerBase } from "./base/optionsAddonsGroup.controller.base";

@swagger.ApiTags("optionsAddonsGroups")
@common.Controller("optionsAddonsGroups")
export class OptionsAddonsGroupController extends OptionsAddonsGroupControllerBase {
  constructor(
    protected readonly service: OptionsAddonsGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
