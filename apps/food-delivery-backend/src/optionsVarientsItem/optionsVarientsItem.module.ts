import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OptionsVarientsItemModuleBase } from "./base/optionsVarientsItem.module.base";
import { OptionsVarientsItemService } from "./optionsVarientsItem.service";
import { OptionsVarientsItemController } from "./optionsVarientsItem.controller";
import { OptionsVarientsItemResolver } from "./optionsVarientsItem.resolver";

@Module({
  imports: [OptionsVarientsItemModuleBase, forwardRef(() => AuthModule)],
  controllers: [OptionsVarientsItemController],
  providers: [OptionsVarientsItemService, OptionsVarientsItemResolver],
  exports: [OptionsVarientsItemService],
})
export class OptionsVarientsItemModule {}
