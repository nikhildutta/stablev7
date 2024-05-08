import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SsoLookupService } from "./ssoLookup.service";
import { SsoLookupControllerBase } from "./base/ssoLookup.controller.base";

@swagger.ApiTags("ssoLookups")
@common.Controller("ssoLookups")
export class SsoLookupController extends SsoLookupControllerBase {
  constructor(
    protected readonly service: SsoLookupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
