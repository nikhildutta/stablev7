import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FulfillmentBookService } from "./fulfillmentBook.service";
import { FulfillmentBookControllerBase } from "./base/fulfillmentBook.controller.base";

@swagger.ApiTags("fulfillmentBooks")
@common.Controller("fulfillmentBooks")
export class FulfillmentBookController extends FulfillmentBookControllerBase {
  constructor(
    protected readonly service: FulfillmentBookService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
