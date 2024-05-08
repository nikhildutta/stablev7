import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ComplaintItemModuleBase } from "./base/complaintItem.module.base";
import { ComplaintItemService } from "./complaintItem.service";
import { ComplaintItemController } from "./complaintItem.controller";
import { ComplaintItemResolver } from "./complaintItem.resolver";

@Module({
  imports: [ComplaintItemModuleBase, forwardRef(() => AuthModule)],
  controllers: [ComplaintItemController],
  providers: [ComplaintItemService, ComplaintItemResolver],
  exports: [ComplaintItemService],
})
export class ComplaintItemModule {}
