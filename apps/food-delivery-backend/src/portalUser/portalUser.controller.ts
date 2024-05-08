import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PortalUserService } from "./portalUser.service";
import { PortalUserControllerBase } from "./base/portalUser.controller.base";

@swagger.ApiTags("portalUsers")
@common.Controller("portalUsers")
export class PortalUserController extends PortalUserControllerBase {
  constructor(
    protected readonly service: PortalUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
