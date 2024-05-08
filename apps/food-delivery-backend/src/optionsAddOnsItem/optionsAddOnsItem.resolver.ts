import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { OptionsAddOnsItemResolverBase } from "./base/optionsAddOnsItem.resolver.base";
import { OptionsAddOnsItem } from "./base/OptionsAddOnsItem";
import { OptionsAddOnsItemService } from "./optionsAddOnsItem.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OptionsAddOnsItem)
export class OptionsAddOnsItemResolver extends OptionsAddOnsItemResolverBase {
  constructor(
    protected readonly service: OptionsAddOnsItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
