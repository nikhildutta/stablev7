import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PaymentsBookModuleBase } from "./base/paymentsBook.module.base";
import { PaymentsBookService } from "./paymentsBook.service";
import { PaymentsBookController } from "./paymentsBook.controller";
import { PaymentsBookResolver } from "./paymentsBook.resolver";

@Module({
  imports: [PaymentsBookModuleBase, forwardRef(() => AuthModule)],
  controllers: [PaymentsBookController],
  providers: [PaymentsBookService, PaymentsBookResolver],
  exports: [PaymentsBookService],
})
export class PaymentsBookModule {}
