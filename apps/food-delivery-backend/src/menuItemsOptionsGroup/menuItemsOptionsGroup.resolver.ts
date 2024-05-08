import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MenuItemsOptionsGroupResolverBase } from "./base/menuItemsOptionsGroup.resolver.base";
import { MenuItemsOptionsGroup } from "./base/MenuItemsOptionsGroup";
import { MenuItemsOptionsGroupService } from "./menuItemsOptionsGroup.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MenuItemsOptionsGroup)
export class MenuItemsOptionsGroupResolver extends MenuItemsOptionsGroupResolverBase {
  constructor(
    protected readonly service: MenuItemsOptionsGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
