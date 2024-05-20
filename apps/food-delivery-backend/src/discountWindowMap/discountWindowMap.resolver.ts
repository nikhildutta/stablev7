import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DiscountWindowMapResolverBase } from "./base/discountWindowMap.resolver.base";
import { DiscountWindowMap } from "./base/DiscountWindowMap";
import { DiscountWindowMapService } from "./discountWindowMap.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DiscountWindowMap)
export class DiscountWindowMapResolver extends DiscountWindowMapResolverBase {
  constructor(
    protected readonly service: DiscountWindowMapService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
