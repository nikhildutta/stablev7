import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ComboItemTableService } from "./comboItemTable.service";
import { ComboItemTableControllerBase } from "./base/comboItemTable.controller.base";

@swagger.ApiTags("comboItemTables")
@common.Controller("comboItemTables")
export class ComboItemTableController extends ComboItemTableControllerBase {
  constructor(
    protected readonly service: ComboItemTableService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
