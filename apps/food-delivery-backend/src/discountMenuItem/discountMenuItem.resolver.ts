import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DiscountMenuItemResolverBase } from "./base/discountMenuItem.resolver.base";
import { DiscountMenuItem } from "./base/DiscountMenuItem";
import { DiscountMenuItemService } from "./discountMenuItem.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DiscountMenuItem)
export class DiscountMenuItemResolver extends DiscountMenuItemResolverBase {
  constructor(
    protected readonly service: DiscountMenuItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
