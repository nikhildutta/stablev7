import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AccountsAddressMapResolverBase } from "./base/accountsAddressMap.resolver.base";
import { AccountsAddressMap } from "./base/AccountsAddressMap";
import { AccountsAddressMapService } from "./accountsAddressMap.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AccountsAddressMap)
export class AccountsAddressMapResolver extends AccountsAddressMapResolverBase {
  constructor(
    protected readonly service: AccountsAddressMapService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
