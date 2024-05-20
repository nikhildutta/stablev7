import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DailyMenuItemStockResolverBase } from "./base/dailyMenuItemStock.resolver.base";
import { DailyMenuItemStock } from "./base/DailyMenuItemStock";
import { DailyMenuItemStockService } from "./dailyMenuItemStock.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DailyMenuItemStock)
export class DailyMenuItemStockResolver extends DailyMenuItemStockResolverBase {
  constructor(
    protected readonly service: DailyMenuItemStockService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
