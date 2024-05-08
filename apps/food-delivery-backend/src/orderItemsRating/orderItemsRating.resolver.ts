import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { OrderItemsRatingResolverBase } from "./base/orderItemsRating.resolver.base";
import { OrderItemsRating } from "./base/OrderItemsRating";
import { OrderItemsRatingService } from "./orderItemsRating.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OrderItemsRating)
export class OrderItemsRatingResolver extends OrderItemsRatingResolverBase {
  constructor(
    protected readonly service: OrderItemsRatingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
