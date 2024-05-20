import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OrderPackagingFeeModuleBase } from "./base/orderPackagingFee.module.base";
import { OrderPackagingFeeService } from "./orderPackagingFee.service";
import { OrderPackagingFeeController } from "./orderPackagingFee.controller";
import { OrderPackagingFeeResolver } from "./orderPackagingFee.resolver";

@Module({
  imports: [OrderPackagingFeeModuleBase, forwardRef(() => AuthModule)],
  controllers: [OrderPackagingFeeController],
  providers: [OrderPackagingFeeService, OrderPackagingFeeResolver],
  exports: [OrderPackagingFeeService],
})
export class OrderPackagingFeeModule {}
