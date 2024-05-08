import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserCustomerLookupResolverBase } from "./base/userCustomerLookup.resolver.base";
import { UserCustomerLookup } from "./base/UserCustomerLookup";
import { UserCustomerLookupService } from "./userCustomerLookup.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserCustomerLookup)
export class UserCustomerLookupResolver extends UserCustomerLookupResolverBase {
  constructor(
    protected readonly service: UserCustomerLookupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
