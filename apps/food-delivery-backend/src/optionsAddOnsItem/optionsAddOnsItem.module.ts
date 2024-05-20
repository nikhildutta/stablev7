import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OptionsAddOnsItemModuleBase } from "./base/optionsAddOnsItem.module.base";
import { OptionsAddOnsItemService } from "./optionsAddOnsItem.service";
import { OptionsAddOnsItemController } from "./optionsAddOnsItem.controller";
import { OptionsAddOnsItemResolver } from "./optionsAddOnsItem.resolver";

@Module({
  imports: [OptionsAddOnsItemModuleBase, forwardRef(() => AuthModule)],
  controllers: [OptionsAddOnsItemController],
  providers: [OptionsAddOnsItemService, OptionsAddOnsItemResolver],
  exports: [OptionsAddOnsItemService],
})
export class OptionsAddOnsItemModule {}
