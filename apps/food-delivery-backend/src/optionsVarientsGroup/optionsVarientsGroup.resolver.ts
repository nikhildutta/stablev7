import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { OptionsVarientsGroupResolverBase } from "./base/optionsVarientsGroup.resolver.base";
import { OptionsVarientsGroup } from "./base/OptionsVarientsGroup";
import { OptionsVarientsGroupService } from "./optionsVarientsGroup.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OptionsVarientsGroup)
export class OptionsVarientsGroupResolver extends OptionsVarientsGroupResolverBase {
  constructor(
    protected readonly service: OptionsVarientsGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
