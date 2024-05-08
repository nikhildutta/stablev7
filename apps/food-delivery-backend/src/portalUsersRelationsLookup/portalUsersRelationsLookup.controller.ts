import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PortalUsersRelationsLookupService } from "./portalUsersRelationsLookup.service";
import { PortalUsersRelationsLookupControllerBase } from "./base/portalUsersRelationsLookup.controller.base";

@swagger.ApiTags("portalUsersRelationsLookups")
@common.Controller("portalUsersRelationsLookups")
export class PortalUsersRelationsLookupController extends PortalUsersRelationsLookupControllerBase {
  constructor(
    protected readonly service: PortalUsersRelationsLookupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
