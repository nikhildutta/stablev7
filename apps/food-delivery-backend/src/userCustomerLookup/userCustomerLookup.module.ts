import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserCustomerLookupModuleBase } from "./base/userCustomerLookup.module.base";
import { UserCustomerLookupService } from "./userCustomerLookup.service";
import { UserCustomerLookupController } from "./userCustomerLookup.controller";
import { UserCustomerLookupResolver } from "./userCustomerLookup.resolver";

@Module({
  imports: [UserCustomerLookupModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserCustomerLookupController],
  providers: [UserCustomerLookupService, UserCustomerLookupResolver],
  exports: [UserCustomerLookupService],
})
export class UserCustomerLookupModule {}
