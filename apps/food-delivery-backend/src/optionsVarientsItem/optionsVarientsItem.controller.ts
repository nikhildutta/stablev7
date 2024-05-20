import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OptionsVarientsItemService } from "./optionsVarientsItem.service";
import { OptionsVarientsItemControllerBase } from "./base/optionsVarientsItem.controller.base";

@swagger.ApiTags("optionsVarientsItems")
@common.Controller("optionsVarientsItems")
export class OptionsVarientsItemController extends OptionsVarientsItemControllerBase {
  constructor(
    protected readonly service: OptionsVarientsItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
