import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PayoutCycleResolverBase } from "./base/payoutCycle.resolver.base";
import { PayoutCycle } from "./base/PayoutCycle";
import { PayoutCycleService } from "./payoutCycle.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PayoutCycle)
export class PayoutCycleResolver extends PayoutCycleResolverBase {
  constructor(
    protected readonly service: PayoutCycleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
