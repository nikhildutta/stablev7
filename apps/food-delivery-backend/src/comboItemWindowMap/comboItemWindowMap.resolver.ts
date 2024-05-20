import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ComboItemWindowMapResolverBase } from "./base/comboItemWindowMap.resolver.base";
import { ComboItemWindowMap } from "./base/ComboItemWindowMap";
import { ComboItemWindowMapService } from "./comboItemWindowMap.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ComboItemWindowMap)
export class ComboItemWindowMapResolver extends ComboItemWindowMapResolverBase {
  constructor(
    protected readonly service: ComboItemWindowMapService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
