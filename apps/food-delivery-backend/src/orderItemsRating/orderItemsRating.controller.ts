import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OrderItemsRatingService } from "./orderItemsRating.service";
import { OrderItemsRatingControllerBase } from "./base/orderItemsRating.controller.base";

@swagger.ApiTags("orderItemsRatings")
@common.Controller("orderItemsRatings")
export class OrderItemsRatingController extends OrderItemsRatingControllerBase {
  constructor(
    protected readonly service: OrderItemsRatingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
