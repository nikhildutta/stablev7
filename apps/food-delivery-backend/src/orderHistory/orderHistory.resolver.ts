import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { OrderHistoryResolverBase } from "./base/orderHistory.resolver.base";
import { OrderHistory } from "./base/OrderHistory";
import { OrderHistoryService } from "./orderHistory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OrderHistory)
export class OrderHistoryResolver extends OrderHistoryResolverBase {
  constructor(
    protected readonly service: OrderHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
