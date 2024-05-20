import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AccountRestaurantLookupResolverBase } from "./base/accountRestaurantLookup.resolver.base";
import { AccountRestaurantLookup } from "./base/AccountRestaurantLookup";
import { AccountRestaurantLookupService } from "./accountRestaurantLookup.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AccountRestaurantLookup)
export class AccountRestaurantLookupResolver extends AccountRestaurantLookupResolverBase {
  constructor(
    protected readonly service: AccountRestaurantLookupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
