import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AccountRestaurantLookupService } from "./accountRestaurantLookup.service";
import { AccountRestaurantLookupControllerBase } from "./base/accountRestaurantLookup.controller.base";

@swagger.ApiTags("accountRestaurantLookups")
@common.Controller("accountRestaurantLookups")
export class AccountRestaurantLookupController extends AccountRestaurantLookupControllerBase {
  constructor(
    protected readonly service: AccountRestaurantLookupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
