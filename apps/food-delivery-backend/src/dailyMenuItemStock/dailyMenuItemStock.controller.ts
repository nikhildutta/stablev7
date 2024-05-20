import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DailyMenuItemStockService } from "./dailyMenuItemStock.service";
import { DailyMenuItemStockControllerBase } from "./base/dailyMenuItemStock.controller.base";

@swagger.ApiTags("dailyMenuItemStocks")
@common.Controller("dailyMenuItemStocks")
export class DailyMenuItemStockController extends DailyMenuItemStockControllerBase {
  constructor(
    protected readonly service: DailyMenuItemStockService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
