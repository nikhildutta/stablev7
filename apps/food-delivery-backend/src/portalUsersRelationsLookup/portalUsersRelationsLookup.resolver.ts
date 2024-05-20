import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PortalUsersRelationsLookupResolverBase } from "./base/portalUsersRelationsLookup.resolver.base";
import { PortalUsersRelationsLookup } from "./base/PortalUsersRelationsLookup";
import { PortalUsersRelationsLookupService } from "./portalUsersRelationsLookup.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PortalUsersRelationsLookup)
export class PortalUsersRelationsLookupResolver extends PortalUsersRelationsLookupResolverBase {
  constructor(
    protected readonly service: PortalUsersRelationsLookupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
