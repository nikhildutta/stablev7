import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DeliveryInstructionAddressMapService } from "./deliveryInstructionAddressMap.service";
import { DeliveryInstructionAddressMapControllerBase } from "./base/deliveryInstructionAddressMap.controller.base";

@swagger.ApiTags("deliveryInstructionAddressMaps")
@common.Controller("deliveryInstructionAddressMaps")
export class DeliveryInstructionAddressMapController extends DeliveryInstructionAddressMapControllerBase {
  constructor(
    protected readonly service: DeliveryInstructionAddressMapService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
