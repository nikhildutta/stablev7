import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MerchantInvoiceResolverBase } from "./base/merchantInvoice.resolver.base";
import { MerchantInvoice } from "./base/MerchantInvoice";
import { MerchantInvoiceService } from "./merchantInvoice.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MerchantInvoice)
export class MerchantInvoiceResolver extends MerchantInvoiceResolverBase {
  constructor(
    protected readonly service: MerchantInvoiceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
