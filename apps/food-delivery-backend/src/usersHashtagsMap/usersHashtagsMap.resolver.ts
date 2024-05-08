import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UsersHashtagsMapResolverBase } from "./base/usersHashtagsMap.resolver.base";
import { UsersHashtagsMap } from "./base/UsersHashtagsMap";
import { UsersHashtagsMapService } from "./usersHashtagsMap.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UsersHashtagsMap)
export class UsersHashtagsMapResolver extends UsersHashtagsMapResolverBase {
  constructor(
    protected readonly service: UsersHashtagsMapService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
