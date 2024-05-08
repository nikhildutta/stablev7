import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ComboGroupResolverBase } from "./base/comboGroup.resolver.base";
import { ComboGroup } from "./base/ComboGroup";
import { ComboGroupService } from "./comboGroup.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ComboGroup)
export class ComboGroupResolver extends ComboGroupResolverBase {
  constructor(
    protected readonly service: ComboGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
