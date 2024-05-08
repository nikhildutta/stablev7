import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RestaurantsHashtagsMapResolverBase } from "./base/restaurantsHashtagsMap.resolver.base";
import { RestaurantsHashtagsMap } from "./base/RestaurantsHashtagsMap";
import { RestaurantsHashtagsMapService } from "./restaurantsHashtagsMap.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RestaurantsHashtagsMap)
export class RestaurantsHashtagsMapResolver extends RestaurantsHashtagsMapResolverBase {
  constructor(
    protected readonly service: RestaurantsHashtagsMapService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
