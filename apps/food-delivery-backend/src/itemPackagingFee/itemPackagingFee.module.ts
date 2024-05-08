import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ItemPackagingFeeModuleBase } from "./base/itemPackagingFee.module.base";
import { ItemPackagingFeeService } from "./itemPackagingFee.service";
import { ItemPackagingFeeController } from "./itemPackagingFee.controller";
import { ItemPackagingFeeResolver } from "./itemPackagingFee.resolver";

@Module({
  imports: [ItemPackagingFeeModuleBase, forwardRef(() => AuthModule)],
  controllers: [ItemPackagingFeeController],
  providers: [ItemPackagingFeeService, ItemPackagingFeeResolver],
  exports: [ItemPackagingFeeService],
})
export class ItemPackagingFeeModule {}
