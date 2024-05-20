import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RestaurantPreferenceResolverBase } from "./base/restaurantPreference.resolver.base";
import { RestaurantPreference } from "./base/RestaurantPreference";
import { RestaurantPreferenceService } from "./restaurantPreference.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RestaurantPreference)
export class RestaurantPreferenceResolver extends RestaurantPreferenceResolverBase {
  constructor(
    protected readonly service: RestaurantPreferenceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
