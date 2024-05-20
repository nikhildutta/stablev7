import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PortalUserModuleBase } from "./base/portalUser.module.base";
import { PortalUserService } from "./portalUser.service";
import { PortalUserController } from "./portalUser.controller";
import { PortalUserResolver } from "./portalUser.resolver";

@Module({
  imports: [PortalUserModuleBase, forwardRef(() => AuthModule)],
  controllers: [PortalUserController],
  providers: [PortalUserService, PortalUserResolver],
  exports: [PortalUserService],
})
export class PortalUserModule {}
