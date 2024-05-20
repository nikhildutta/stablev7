import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { OptionsVarientsItemResolverBase } from "./base/optionsVarientsItem.resolver.base";
import { OptionsVarientsItem } from "./base/OptionsVarientsItem";
import { OptionsVarientsItemService } from "./optionsVarientsItem.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OptionsVarientsItem)
export class OptionsVarientsItemResolver extends OptionsVarientsItemResolverBase {
  constructor(
    protected readonly service: OptionsVarientsItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
