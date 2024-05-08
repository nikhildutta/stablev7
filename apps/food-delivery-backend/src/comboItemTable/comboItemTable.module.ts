import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ComboItemTableModuleBase } from "./base/comboItemTable.module.base";
import { ComboItemTableService } from "./comboItemTable.service";
import { ComboItemTableController } from "./comboItemTable.controller";
import { ComboItemTableResolver } from "./comboItemTable.resolver";

@Module({
  imports: [ComboItemTableModuleBase, forwardRef(() => AuthModule)],
  controllers: [ComboItemTableController],
  providers: [ComboItemTableService, ComboItemTableResolver],
  exports: [ComboItemTableService],
})
export class ComboItemTableModule {}
