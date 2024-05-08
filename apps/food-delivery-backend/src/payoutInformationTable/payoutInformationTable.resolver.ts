import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PayoutInformationTableResolverBase } from "./base/payoutInformationTable.resolver.base";
import { PayoutInformationTable } from "./base/PayoutInformationTable";
import { PayoutInformationTableService } from "./payoutInformationTable.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PayoutInformationTable)
export class PayoutInformationTableResolver extends PayoutInformationTableResolverBase {
  constructor(
    protected readonly service: PayoutInformationTableService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
