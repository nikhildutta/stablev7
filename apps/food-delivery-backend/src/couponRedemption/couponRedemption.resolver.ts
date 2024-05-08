import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CouponRedemptionResolverBase } from "./base/couponRedemption.resolver.base";
import { CouponRedemption } from "./base/CouponRedemption";
import { CouponRedemptionService } from "./couponRedemption.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CouponRedemption)
export class CouponRedemptionResolver extends CouponRedemptionResolverBase {
  constructor(
    protected readonly service: CouponRedemptionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
