import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PayoutInformationTableModuleBase } from "./base/payoutInformationTable.module.base";
import { PayoutInformationTableService } from "./payoutInformationTable.service";
import { PayoutInformationTableController } from "./payoutInformationTable.controller";
import { PayoutInformationTableResolver } from "./payoutInformationTable.resolver";

@Module({
  imports: [PayoutInformationTableModuleBase, forwardRef(() => AuthModule)],
  controllers: [PayoutInformationTableController],
  providers: [PayoutInformationTableService, PayoutInformationTableResolver],
  exports: [PayoutInformationTableService],
})
export class PayoutInformationTableModule {}
