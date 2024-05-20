import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FavouriteRestaurantResolverBase } from "./base/favouriteRestaurant.resolver.base";
import { FavouriteRestaurant } from "./base/FavouriteRestaurant";
import { FavouriteRestaurantService } from "./favouriteRestaurant.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FavouriteRestaurant)
export class FavouriteRestaurantResolver extends FavouriteRestaurantResolverBase {
  constructor(
    protected readonly service: FavouriteRestaurantService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
