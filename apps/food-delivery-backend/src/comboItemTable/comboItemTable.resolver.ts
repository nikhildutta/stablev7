import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ComboItemTableResolverBase } from "./base/comboItemTable.resolver.base";
import { ComboItemTable } from "./base/ComboItemTable";
import { ComboItemTableService } from "./comboItemTable.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ComboItemTable)
export class ComboItemTableResolver extends ComboItemTableResolverBase {
  constructor(
    protected readonly service: ComboItemTableService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
