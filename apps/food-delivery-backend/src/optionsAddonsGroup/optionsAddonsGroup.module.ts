import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OptionsAddonsGroupModuleBase } from "./base/optionsAddonsGroup.module.base";
import { OptionsAddonsGroupService } from "./optionsAddonsGroup.service";
import { OptionsAddonsGroupController } from "./optionsAddonsGroup.controller";
import { OptionsAddonsGroupResolver } from "./optionsAddonsGroup.resolver";

@Module({
  imports: [OptionsAddonsGroupModuleBase, forwardRef(() => AuthModule)],
  controllers: [OptionsAddonsGroupController],
  providers: [OptionsAddonsGroupService, OptionsAddonsGroupResolver],
  exports: [OptionsAddonsGroupService],
})
export class OptionsAddonsGroupModule {}
