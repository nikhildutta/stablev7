import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ComplaintItemResolverBase } from "./base/complaintItem.resolver.base";
import { ComplaintItem } from "./base/ComplaintItem";
import { ComplaintItemService } from "./complaintItem.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ComplaintItem)
export class ComplaintItemResolver extends ComplaintItemResolverBase {
  constructor(
    protected readonly service: ComplaintItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
