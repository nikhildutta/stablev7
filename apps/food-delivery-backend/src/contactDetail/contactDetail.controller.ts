import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ContactDetailService } from "./contactDetail.service";
import { ContactDetailControllerBase } from "./base/contactDetail.controller.base";

@swagger.ApiTags("contactDetails")
@common.Controller("contactDetails")
export class ContactDetailController extends ContactDetailControllerBase {
  constructor(
    protected readonly service: ContactDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
