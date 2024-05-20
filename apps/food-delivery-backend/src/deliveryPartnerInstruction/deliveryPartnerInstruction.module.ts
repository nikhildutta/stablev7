import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DeliveryPartnerInstructionModuleBase } from "./base/deliveryPartnerInstruction.module.base";
import { DeliveryPartnerInstructionService } from "./deliveryPartnerInstruction.service";
import { DeliveryPartnerInstructionController } from "./deliveryPartnerInstruction.controller";
import { DeliveryPartnerInstructionResolver } from "./deliveryPartnerInstruction.resolver";

@Module({
  imports: [DeliveryPartnerInstructionModuleBase, forwardRef(() => AuthModule)],
  controllers: [DeliveryPartnerInstructionController],
  providers: [
    DeliveryPartnerInstructionService,
    DeliveryPartnerInstructionResolver,
  ],
  exports: [DeliveryPartnerInstructionService],
})
export class DeliveryPartnerInstructionModule {}
