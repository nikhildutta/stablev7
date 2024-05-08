import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ContactHashtagsMapService } from "./contactHashtagsMap.service";
import { ContactHashtagsMapControllerBase } from "./base/contactHashtagsMap.controller.base";

@swagger.ApiTags("contactHashtagsMaps")
@common.Controller("contactHashtagsMaps")
export class ContactHashtagsMapController extends ContactHashtagsMapControllerBase {
  constructor(
    protected readonly service: ContactHashtagsMapService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
