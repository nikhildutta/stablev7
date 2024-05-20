import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MenuItemOptionResolverBase } from "./base/menuItemOption.resolver.base";
import { MenuItemOption } from "./base/MenuItemOption";
import { MenuItemOptionService } from "./menuItemOption.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MenuItemOption)
export class MenuItemOptionResolver extends MenuItemOptionResolverBase {
  constructor(
    protected readonly service: MenuItemOptionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
