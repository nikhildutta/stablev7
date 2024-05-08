import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CustomerAddressMapService } from "./customerAddressMap.service";
import { CustomerAddressMapControllerBase } from "./base/customerAddressMap.controller.base";

@swagger.ApiTags("customerAddressMaps")
@common.Controller("customerAddressMaps")
export class CustomerAddressMapController extends CustomerAddressMapControllerBase {
  constructor(
    protected readonly service: CustomerAddressMapService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
