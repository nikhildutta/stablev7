import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AccountsAddressMapModuleBase } from "./base/accountsAddressMap.module.base";
import { AccountsAddressMapService } from "./accountsAddressMap.service";
import { AccountsAddressMapController } from "./accountsAddressMap.controller";
import { AccountsAddressMapResolver } from "./accountsAddressMap.resolver";

@Module({
  imports: [AccountsAddressMapModuleBase, forwardRef(() => AuthModule)],
  controllers: [AccountsAddressMapController],
  providers: [AccountsAddressMapService, AccountsAddressMapResolver],
  exports: [AccountsAddressMapService],
})
export class AccountsAddressMapModule {}
