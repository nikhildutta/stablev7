import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OrdersHashtagsMapService } from "./ordersHashtagsMap.service";
import { OrdersHashtagsMapControllerBase } from "./base/ordersHashtagsMap.controller.base";

@swagger.ApiTags("ordersHashtagsMaps")
@common.Controller("ordersHashtagsMaps")
export class OrdersHashtagsMapController extends OrdersHashtagsMapControllerBase {
  constructor(
    protected readonly service: OrdersHashtagsMapService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
