import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SsoLookupResolverBase } from "./base/ssoLookup.resolver.base";
import { SsoLookup } from "./base/SsoLookup";
import { SsoLookupService } from "./ssoLookup.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SsoLookup)
export class SsoLookupResolver extends SsoLookupResolverBase {
  constructor(
    protected readonly service: SsoLookupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
