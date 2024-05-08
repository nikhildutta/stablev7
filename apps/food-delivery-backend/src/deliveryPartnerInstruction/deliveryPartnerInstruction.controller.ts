import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DeliveryPartnerInstructionService } from "./deliveryPartnerInstruction.service";
import { DeliveryPartnerInstructionControllerBase } from "./base/deliveryPartnerInstruction.controller.base";

@swagger.ApiTags("deliveryPartnerInstructions")
@common.Controller("deliveryPartnerInstructions")
export class DeliveryPartnerInstructionController extends DeliveryPartnerInstructionControllerBase {
  constructor(
    protected readonly service: DeliveryPartnerInstructionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
