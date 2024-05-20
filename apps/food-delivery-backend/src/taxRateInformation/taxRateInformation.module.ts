import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TaxRateInformationModuleBase } from "./base/taxRateInformation.module.base";
import { TaxRateInformationService } from "./taxRateInformation.service";
import { TaxRateInformationController } from "./taxRateInformation.controller";
import { TaxRateInformationResolver } from "./taxRateInformation.resolver";

@Module({
  imports: [TaxRateInformationModuleBase, forwardRef(() => AuthModule)],
  controllers: [TaxRateInformationController],
  providers: [TaxRateInformationService, TaxRateInformationResolver],
  exports: [TaxRateInformationService],
})
export class TaxRateInformationModule {}
