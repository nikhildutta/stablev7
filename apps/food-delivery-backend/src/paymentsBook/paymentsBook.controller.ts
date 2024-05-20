import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PaymentsBookService } from "./paymentsBook.service";
import { PaymentsBookControllerBase } from "./base/paymentsBook.controller.base";

@swagger.ApiTags("paymentsBooks")
@common.Controller("paymentsBooks")
export class PaymentsBookController extends PaymentsBookControllerBase {
  constructor(
    protected readonly service: PaymentsBookService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
