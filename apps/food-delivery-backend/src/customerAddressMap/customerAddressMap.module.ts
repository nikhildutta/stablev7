import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CustomerAddressMapModuleBase } from "./base/customerAddressMap.module.base";
import { CustomerAddressMapService } from "./customerAddressMap.service";
import { CustomerAddressMapController } from "./customerAddressMap.controller";
import { CustomerAddressMapResolver } from "./customerAddressMap.resolver";

@Module({
  imports: [CustomerAddressMapModuleBase, forwardRef(() => AuthModule)],
  controllers: [CustomerAddressMapController],
  providers: [CustomerAddressMapService, CustomerAddressMapResolver],
  exports: [CustomerAddressMapService],
})
export class CustomerAddressMapModule {}
