import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CustomerAddressMapResolverBase } from "./base/customerAddressMap.resolver.base";
import { CustomerAddressMap } from "./base/CustomerAddressMap";
import { CustomerAddressMapService } from "./customerAddressMap.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CustomerAddressMap)
export class CustomerAddressMapResolver extends CustomerAddressMapResolverBase {
  constructor(
    protected readonly service: CustomerAddressMapService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
