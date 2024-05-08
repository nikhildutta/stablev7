import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MerchantInvoiceService } from "./merchantInvoice.service";
import { MerchantInvoiceControllerBase } from "./base/merchantInvoice.controller.base";

@swagger.ApiTags("merchantInvoices")
@common.Controller("merchantInvoices")
export class MerchantInvoiceController extends MerchantInvoiceControllerBase {
  constructor(
    protected readonly service: MerchantInvoiceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
