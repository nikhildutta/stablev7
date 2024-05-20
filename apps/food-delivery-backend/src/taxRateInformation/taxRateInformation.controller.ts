import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TaxRateInformationService } from "./taxRateInformation.service";
import { TaxRateInformationControllerBase } from "./base/taxRateInformation.controller.base";

@swagger.ApiTags("taxRateInformations")
@common.Controller("taxRateInformations")
export class TaxRateInformationController extends TaxRateInformationControllerBase {
  constructor(
    protected readonly service: TaxRateInformationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
