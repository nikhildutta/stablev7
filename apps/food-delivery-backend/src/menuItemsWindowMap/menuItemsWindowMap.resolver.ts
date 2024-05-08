import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MenuItemsWindowMapResolverBase } from "./base/menuItemsWindowMap.resolver.base";
import { MenuItemsWindowMap } from "./base/MenuItemsWindowMap";
import { MenuItemsWindowMapService } from "./menuItemsWindowMap.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MenuItemsWindowMap)
export class MenuItemsWindowMapResolver extends MenuItemsWindowMapResolverBase {
  constructor(
    protected readonly service: MenuItemsWindowMapService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
