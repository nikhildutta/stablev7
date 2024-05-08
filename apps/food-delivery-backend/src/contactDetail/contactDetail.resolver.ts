import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ContactDetailResolverBase } from "./base/contactDetail.resolver.base";
import { ContactDetail } from "./base/ContactDetail";
import { ContactDetailService } from "./contactDetail.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ContactDetail)
export class ContactDetailResolver extends ContactDetailResolverBase {
  constructor(
    protected readonly service: ContactDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
