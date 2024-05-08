import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ComboItemWindowMapModuleBase } from "./base/comboItemWindowMap.module.base";
import { ComboItemWindowMapService } from "./comboItemWindowMap.service";
import { ComboItemWindowMapController } from "./comboItemWindowMap.controller";
import { ComboItemWindowMapResolver } from "./comboItemWindowMap.resolver";

@Module({
  imports: [ComboItemWindowMapModuleBase, forwardRef(() => AuthModule)],
  controllers: [ComboItemWindowMapController],
  providers: [ComboItemWindowMapService, ComboItemWindowMapResolver],
  exports: [ComboItemWindowMapService],
})
export class ComboItemWindowMapModule {}
