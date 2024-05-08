import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AccountRestaurantLookupModuleBase } from "./base/accountRestaurantLookup.module.base";
import { AccountRestaurantLookupService } from "./accountRestaurantLookup.service";
import { AccountRestaurantLookupController } from "./accountRestaurantLookup.controller";
import { AccountRestaurantLookupResolver } from "./accountRestaurantLookup.resolver";

@Module({
  imports: [AccountRestaurantLookupModuleBase, forwardRef(() => AuthModule)],
  controllers: [AccountRestaurantLookupController],
  providers: [AccountRestaurantLookupService, AccountRestaurantLookupResolver],
  exports: [AccountRestaurantLookupService],
})
export class AccountRestaurantLookupModule {}
