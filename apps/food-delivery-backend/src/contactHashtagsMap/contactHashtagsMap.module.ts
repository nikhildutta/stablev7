import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ContactHashtagsMapModuleBase } from "./base/contactHashtagsMap.module.base";
import { ContactHashtagsMapService } from "./contactHashtagsMap.service";
import { ContactHashtagsMapController } from "./contactHashtagsMap.controller";
import { ContactHashtagsMapResolver } from "./contactHashtagsMap.resolver";

@Module({
  imports: [ContactHashtagsMapModuleBase, forwardRef(() => AuthModule)],
  controllers: [ContactHashtagsMapController],
  providers: [ContactHashtagsMapService, ContactHashtagsMapResolver],
  exports: [ContactHashtagsMapService],
})
export class ContactHashtagsMapModule {}
