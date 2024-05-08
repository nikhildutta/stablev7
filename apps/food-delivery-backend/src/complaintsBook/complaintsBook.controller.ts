import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ComplaintsBookService } from "./complaintsBook.service";
import { ComplaintsBookControllerBase } from "./base/complaintsBook.controller.base";

@swagger.ApiTags("complaintsBooks")
@common.Controller("complaintsBooks")
export class ComplaintsBookController extends ComplaintsBookControllerBase {
  constructor(
    protected readonly service: ComplaintsBookService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
