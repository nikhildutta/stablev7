import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MenuItemsHashtagsMapResolverBase } from "./base/menuItemsHashtagsMap.resolver.base";
import { MenuItemsHashtagsMap } from "./base/MenuItemsHashtagsMap";
import { MenuItemsHashtagsMapService } from "./menuItemsHashtagsMap.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MenuItemsHashtagsMap)
export class MenuItemsHashtagsMapResolver extends MenuItemsHashtagsMapResolverBase {
  constructor(
    protected readonly service: MenuItemsHashtagsMapService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
