import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SettlementsBreakupResolverBase } from "./base/settlementsBreakup.resolver.base";
import { SettlementsBreakup } from "./base/SettlementsBreakup";
import { SettlementsBreakupService } from "./settlementsBreakup.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SettlementsBreakup)
export class SettlementsBreakupResolver extends SettlementsBreakupResolverBase {
  constructor(
    protected readonly service: SettlementsBreakupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
