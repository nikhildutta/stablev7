import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ComboGroupModuleBase } from "./base/comboGroup.module.base";
import { ComboGroupService } from "./comboGroup.service";
import { ComboGroupController } from "./comboGroup.controller";
import { ComboGroupResolver } from "./comboGroup.resolver";

@Module({
  imports: [ComboGroupModuleBase, forwardRef(() => AuthModule)],
  controllers: [ComboGroupController],
  providers: [ComboGroupService, ComboGroupResolver],
  exports: [ComboGroupService],
})
export class ComboGroupModule {}
