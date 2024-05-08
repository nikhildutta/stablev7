import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ItemPackagingFeeResolverBase } from "./base/itemPackagingFee.resolver.base";
import { ItemPackagingFee } from "./base/ItemPackagingFee";
import { ItemPackagingFeeService } from "./itemPackagingFee.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ItemPackagingFee)
export class ItemPackagingFeeResolver extends ItemPackagingFeeResolverBase {
  constructor(
    protected readonly service: ItemPackagingFeeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
