import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ContactDetailModuleBase } from "./base/contactDetail.module.base";
import { ContactDetailService } from "./contactDetail.service";
import { ContactDetailController } from "./contactDetail.controller";
import { ContactDetailResolver } from "./contactDetail.resolver";

@Module({
  imports: [ContactDetailModuleBase, forwardRef(() => AuthModule)],
  controllers: [ContactDetailController],
  providers: [ContactDetailService, ContactDetailResolver],
  exports: [ContactDetailService],
})
export class ContactDetailModule {}
