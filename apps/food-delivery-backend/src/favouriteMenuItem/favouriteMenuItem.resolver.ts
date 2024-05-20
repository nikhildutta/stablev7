import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FavouriteMenuItemResolverBase } from "./base/favouriteMenuItem.resolver.base";
import { FavouriteMenuItem } from "./base/FavouriteMenuItem";
import { FavouriteMenuItemService } from "./favouriteMenuItem.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FavouriteMenuItem)
export class FavouriteMenuItemResolver extends FavouriteMenuItemResolverBase {
  constructor(
    protected readonly service: FavouriteMenuItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
