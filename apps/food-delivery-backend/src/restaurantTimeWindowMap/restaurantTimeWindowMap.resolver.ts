import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RestaurantTimeWindowMapResolverBase } from "./base/restaurantTimeWindowMap.resolver.base";
import { RestaurantTimeWindowMap } from "./base/RestaurantTimeWindowMap";
import { RestaurantTimeWindowMapService } from "./restaurantTimeWindowMap.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RestaurantTimeWindowMap)
export class RestaurantTimeWindowMapResolver extends RestaurantTimeWindowMapResolverBase {
  constructor(
    protected readonly service: RestaurantTimeWindowMapService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
