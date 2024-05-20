import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PayoutInformationTableService } from "./payoutInformationTable.service";
import { PayoutInformationTableControllerBase } from "./base/payoutInformationTable.controller.base";

@swagger.ApiTags("payoutInformationTables")
@common.Controller("payoutInformationTables")
export class PayoutInformationTableController extends PayoutInformationTableControllerBase {
  constructor(
    protected readonly service: PayoutInformationTableService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
