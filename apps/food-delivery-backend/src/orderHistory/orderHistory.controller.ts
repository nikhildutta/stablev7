import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OrderHistoryService } from "./orderHistory.service";
import { OrderHistoryControllerBase } from "./base/orderHistory.controller.base";

@swagger.ApiTags("orderHistories")
@common.Controller("orderHistories")
export class OrderHistoryController extends OrderHistoryControllerBase {
  constructor(
    protected readonly service: OrderHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
