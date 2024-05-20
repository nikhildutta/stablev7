import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FulfillmentBookResolverBase } from "./base/fulfillmentBook.resolver.base";
import { FulfillmentBook } from "./base/FulfillmentBook";
import { FulfillmentBookService } from "./fulfillmentBook.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FulfillmentBook)
export class FulfillmentBookResolver extends FulfillmentBookResolverBase {
  constructor(
    protected readonly service: FulfillmentBookService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
