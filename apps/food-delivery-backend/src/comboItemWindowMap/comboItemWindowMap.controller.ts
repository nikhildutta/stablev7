import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ComboItemWindowMapService } from "./comboItemWindowMap.service";
import { ComboItemWindowMapControllerBase } from "./base/comboItemWindowMap.controller.base";

@swagger.ApiTags("comboItemWindowMaps")
@common.Controller("comboItemWindowMaps")
export class ComboItemWindowMapController extends ComboItemWindowMapControllerBase {
  constructor(
    protected readonly service: ComboItemWindowMapService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
