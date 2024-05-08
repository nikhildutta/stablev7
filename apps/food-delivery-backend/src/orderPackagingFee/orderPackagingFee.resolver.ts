import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { OrderPackagingFeeResolverBase } from "./base/orderPackagingFee.resolver.base";
import { OrderPackagingFee } from "./base/OrderPackagingFee";
import { OrderPackagingFeeService } from "./orderPackagingFee.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OrderPackagingFee)
export class OrderPackagingFeeResolver extends OrderPackagingFeeResolverBase {
  constructor(
    protected readonly service: OrderPackagingFeeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
