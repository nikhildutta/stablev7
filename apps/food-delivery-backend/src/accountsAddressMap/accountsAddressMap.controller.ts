import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AccountsAddressMapService } from "./accountsAddressMap.service";
import { AccountsAddressMapControllerBase } from "./base/accountsAddressMap.controller.base";

@swagger.ApiTags("accountsAddressMaps")
@common.Controller("accountsAddressMaps")
export class AccountsAddressMapController extends AccountsAddressMapControllerBase {
  constructor(
    protected readonly service: AccountsAddressMapService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
