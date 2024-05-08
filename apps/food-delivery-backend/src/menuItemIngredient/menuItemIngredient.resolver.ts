import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MenuItemIngredientResolverBase } from "./base/menuItemIngredient.resolver.base";
import { MenuItemIngredient } from "./base/MenuItemIngredient";
import { MenuItemIngredientService } from "./menuItemIngredient.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MenuItemIngredient)
export class MenuItemIngredientResolver extends MenuItemIngredientResolverBase {
  constructor(
    protected readonly service: MenuItemIngredientService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
