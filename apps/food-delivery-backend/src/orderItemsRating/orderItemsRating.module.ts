import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OrderItemsRatingModuleBase } from "./base/orderItemsRating.module.base";
import { OrderItemsRatingService } from "./orderItemsRating.service";
import { OrderItemsRatingController } from "./orderItemsRating.controller";
import { OrderItemsRatingResolver } from "./orderItemsRating.resolver";

@Module({
  imports: [OrderItemsRatingModuleBase, forwardRef(() => AuthModule)],
  controllers: [OrderItemsRatingController],
  providers: [OrderItemsRatingService, OrderItemsRatingResolver],
  exports: [OrderItemsRatingService],
})
export class OrderItemsRatingModule {}
