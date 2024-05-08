import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UsersHashtagsMapModuleBase } from "./base/usersHashtagsMap.module.base";
import { UsersHashtagsMapService } from "./usersHashtagsMap.service";
import { UsersHashtagsMapController } from "./usersHashtagsMap.controller";
import { UsersHashtagsMapResolver } from "./usersHashtagsMap.resolver";

@Module({
  imports: [UsersHashtagsMapModuleBase, forwardRef(() => AuthModule)],
  controllers: [UsersHashtagsMapController],
  providers: [UsersHashtagsMapService, UsersHashtagsMapResolver],
  exports: [UsersHashtagsMapService],
})
export class UsersHashtagsMapModule {}
