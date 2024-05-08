import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DiscountTypeResolverBase } from "./base/discountType.resolver.base";
import { DiscountType } from "./base/DiscountType";
import { DiscountTypeService } from "./discountType.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DiscountType)
export class DiscountTypeResolver extends DiscountTypeResolverBase {
  constructor(
    protected readonly service: DiscountTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
