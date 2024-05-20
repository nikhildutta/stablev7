import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SsoLookupModuleBase } from "./base/ssoLookup.module.base";
import { SsoLookupService } from "./ssoLookup.service";
import { SsoLookupController } from "./ssoLookup.controller";
import { SsoLookupResolver } from "./ssoLookup.resolver";

@Module({
  imports: [SsoLookupModuleBase, forwardRef(() => AuthModule)],
  controllers: [SsoLookupController],
  providers: [SsoLookupService, SsoLookupResolver],
  exports: [SsoLookupService],
})
export class SsoLookupModule {}
