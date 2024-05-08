import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OptionsVarientsGroupModuleBase } from "./base/optionsVarientsGroup.module.base";
import { OptionsVarientsGroupService } from "./optionsVarientsGroup.service";
import { OptionsVarientsGroupController } from "./optionsVarientsGroup.controller";
import { OptionsVarientsGroupResolver } from "./optionsVarientsGroup.resolver";

@Module({
  imports: [OptionsVarientsGroupModuleBase, forwardRef(() => AuthModule)],
  controllers: [OptionsVarientsGroupController],
  providers: [OptionsVarientsGroupService, OptionsVarientsGroupResolver],
  exports: [OptionsVarientsGroupService],
})
export class OptionsVarientsGroupModule {}
