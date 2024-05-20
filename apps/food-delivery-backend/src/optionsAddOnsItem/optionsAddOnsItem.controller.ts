import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OptionsAddOnsItemService } from "./optionsAddOnsItem.service";
import { OptionsAddOnsItemControllerBase } from "./base/optionsAddOnsItem.controller.base";

@swagger.ApiTags("optionsAddOnsItems")
@common.Controller("optionsAddOnsItems")
export class OptionsAddOnsItemController extends OptionsAddOnsItemControllerBase {
  constructor(
    protected readonly service: OptionsAddOnsItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
