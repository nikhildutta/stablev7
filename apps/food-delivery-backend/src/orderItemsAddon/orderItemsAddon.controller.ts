import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OrderItemsAddonService } from "./orderItemsAddon.service";
import { OrderItemsAddonControllerBase } from "./base/orderItemsAddon.controller.base";

@swagger.ApiTags("orderItemsAddons")
@common.Controller("orderItemsAddons")
export class OrderItemsAddonController extends OrderItemsAddonControllerBase {
  constructor(
    protected readonly service: OrderItemsAddonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
