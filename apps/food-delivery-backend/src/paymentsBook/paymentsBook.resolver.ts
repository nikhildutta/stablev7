import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PaymentsBookResolverBase } from "./base/paymentsBook.resolver.base";
import { PaymentsBook } from "./base/PaymentsBook";
import { PaymentsBookService } from "./paymentsBook.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PaymentsBook)
export class PaymentsBookResolver extends PaymentsBookResolverBase {
  constructor(
    protected readonly service: PaymentsBookService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
