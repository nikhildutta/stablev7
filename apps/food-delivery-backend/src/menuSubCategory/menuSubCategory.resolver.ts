import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MenuSubCategoryResolverBase } from "./base/menuSubCategory.resolver.base";
import { MenuSubCategory } from "./base/MenuSubCategory";
import { MenuSubCategoryService } from "./menuSubCategory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MenuSubCategory)
export class MenuSubCategoryResolver extends MenuSubCategoryResolverBase {
  constructor(
    protected readonly service: MenuSubCategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
