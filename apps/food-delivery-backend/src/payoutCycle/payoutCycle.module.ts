import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PayoutCycleModuleBase } from "./base/payoutCycle.module.base";
import { PayoutCycleService } from "./payoutCycle.service";
import { PayoutCycleController } from "./payoutCycle.controller";
import { PayoutCycleResolver } from "./payoutCycle.resolver";

@Module({
  imports: [PayoutCycleModuleBase, forwardRef(() => AuthModule)],
  controllers: [PayoutCycleController],
  providers: [PayoutCycleService, PayoutCycleResolver],
  exports: [PayoutCycleService],
})
export class PayoutCycleModule {}
