import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MenuCategoryResolverBase } from "./base/menuCategory.resolver.base";
import { MenuCategory } from "./base/MenuCategory";
import { MenuCategoryService } from "./menuCategory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MenuCategory)
export class MenuCategoryResolver extends MenuCategoryResolverBase {
  constructor(
    protected readonly service: MenuCategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
