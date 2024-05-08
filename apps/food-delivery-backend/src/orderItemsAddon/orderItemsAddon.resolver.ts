import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { OrderItemsAddonResolverBase } from "./base/orderItemsAddon.resolver.base";
import { OrderItemsAddon } from "./base/OrderItemsAddon";
import { OrderItemsAddonService } from "./orderItemsAddon.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OrderItemsAddon)
export class OrderItemsAddonResolver extends OrderItemsAddonResolverBase {
  constructor(
    protected readonly service: OrderItemsAddonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
