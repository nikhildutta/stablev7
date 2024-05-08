import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { OrdersHashtagsMapResolverBase } from "./base/ordersHashtagsMap.resolver.base";
import { OrdersHashtagsMap } from "./base/OrdersHashtagsMap";
import { OrdersHashtagsMapService } from "./ordersHashtagsMap.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OrdersHashtagsMap)
export class OrdersHashtagsMapResolver extends OrdersHashtagsMapResolverBase {
  constructor(
    protected readonly service: OrdersHashtagsMapService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
