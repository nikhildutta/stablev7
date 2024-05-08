import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MerchantInvoiceModuleBase } from "./base/merchantInvoice.module.base";
import { MerchantInvoiceService } from "./merchantInvoice.service";
import { MerchantInvoiceController } from "./merchantInvoice.controller";
import { MerchantInvoiceResolver } from "./merchantInvoice.resolver";

@Module({
  imports: [MerchantInvoiceModuleBase, forwardRef(() => AuthModule)],
  controllers: [MerchantInvoiceController],
  providers: [MerchantInvoiceService, MerchantInvoiceResolver],
  exports: [MerchantInvoiceService],
})
export class MerchantInvoiceModule {}
