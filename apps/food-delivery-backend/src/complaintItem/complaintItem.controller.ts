import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ComplaintItemService } from "./complaintItem.service";
import { ComplaintItemControllerBase } from "./base/complaintItem.controller.base";

@swagger.ApiTags("complaintItems")
@common.Controller("complaintItems")
export class ComplaintItemController extends ComplaintItemControllerBase {
  constructor(
    protected readonly service: ComplaintItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
