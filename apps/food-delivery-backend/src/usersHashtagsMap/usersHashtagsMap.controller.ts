import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UsersHashtagsMapService } from "./usersHashtagsMap.service";
import { UsersHashtagsMapControllerBase } from "./base/usersHashtagsMap.controller.base";

@swagger.ApiTags("usersHashtagsMaps")
@common.Controller("usersHashtagsMaps")
export class UsersHashtagsMapController extends UsersHashtagsMapControllerBase {
  constructor(
    protected readonly service: UsersHashtagsMapService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
