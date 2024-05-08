import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TimeWindowModuleBase } from "./base/timeWindow.module.base";
import { TimeWindowService } from "./timeWindow.service";
import { TimeWindowController } from "./timeWindow.controller";
import { TimeWindowResolver } from "./timeWindow.resolver";

@Module({
  imports: [TimeWindowModuleBase, forwardRef(() => AuthModule)],
  controllers: [TimeWindowController],
  providers: [TimeWindowService, TimeWindowResolver],
  exports: [TimeWindowService],
})
export class TimeWindowModule {}
