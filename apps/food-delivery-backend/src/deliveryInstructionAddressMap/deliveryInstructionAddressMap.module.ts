import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DeliveryInstructionAddressMapModuleBase } from "./base/deliveryInstructionAddressMap.module.base";
import { DeliveryInstructionAddressMapService } from "./deliveryInstructionAddressMap.service";
import { DeliveryInstructionAddressMapController } from "./deliveryInstructionAddressMap.controller";
import { DeliveryInstructionAddressMapResolver } from "./deliveryInstructionAddressMap.resolver";

@Module({
  imports: [
    DeliveryInstructionAddressMapModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [DeliveryInstructionAddressMapController],
  providers: [
    DeliveryInstructionAddressMapService,
    DeliveryInstructionAddressMapResolver,
  ],
  exports: [DeliveryInstructionAddressMapService],
})
export class DeliveryInstructionAddressMapModule {}
