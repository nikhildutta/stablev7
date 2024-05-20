import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PortalUsersRelationsLookupModuleBase } from "./base/portalUsersRelationsLookup.module.base";
import { PortalUsersRelationsLookupService } from "./portalUsersRelationsLookup.service";
import { PortalUsersRelationsLookupController } from "./portalUsersRelationsLookup.controller";
import { PortalUsersRelationsLookupResolver } from "./portalUsersRelationsLookup.resolver";

@Module({
  imports: [PortalUsersRelationsLookupModuleBase, forwardRef(() => AuthModule)],
  controllers: [PortalUsersRelationsLookupController],
  providers: [
    PortalUsersRelationsLookupService,
    PortalUsersRelationsLookupResolver,
  ],
  exports: [PortalUsersRelationsLookupService],
})
export class PortalUsersRelationsLookupModule {}
