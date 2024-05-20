import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ComplaintsBookResolverBase } from "./base/complaintsBook.resolver.base";
import { ComplaintsBook } from "./base/ComplaintsBook";
import { ComplaintsBookService } from "./complaintsBook.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ComplaintsBook)
export class ComplaintsBookResolver extends ComplaintsBookResolverBase {
  constructor(
    protected readonly service: ComplaintsBookService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
