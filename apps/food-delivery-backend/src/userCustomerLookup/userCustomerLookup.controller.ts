import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserCustomerLookupService } from "./userCustomerLookup.service";
import { UserCustomerLookupControllerBase } from "./base/userCustomerLookup.controller.base";

@swagger.ApiTags("userCustomerLookups")
@common.Controller("userCustomerLookups")
export class UserCustomerLookupController extends UserCustomerLookupControllerBase {
  constructor(
    protected readonly service: UserCustomerLookupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
