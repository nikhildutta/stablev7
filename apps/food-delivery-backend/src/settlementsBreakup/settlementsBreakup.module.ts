import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SettlementsBreakupModuleBase } from "./base/settlementsBreakup.module.base";
import { SettlementsBreakupService } from "./settlementsBreakup.service";
import { SettlementsBreakupController } from "./settlementsBreakup.controller";
import { SettlementsBreakupResolver } from "./settlementsBreakup.resolver";

@Module({
  imports: [SettlementsBreakupModuleBase, forwardRef(() => AuthModule)],
  controllers: [SettlementsBreakupController],
  providers: [SettlementsBreakupService, SettlementsBreakupResolver],
  exports: [SettlementsBreakupService],
})
export class SettlementsBreakupModule {}
