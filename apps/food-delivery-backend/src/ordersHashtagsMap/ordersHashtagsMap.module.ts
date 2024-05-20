import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OrdersHashtagsMapModuleBase } from "./base/ordersHashtagsMap.module.base";
import { OrdersHashtagsMapService } from "./ordersHashtagsMap.service";
import { OrdersHashtagsMapController } from "./ordersHashtagsMap.controller";
import { OrdersHashtagsMapResolver } from "./ordersHashtagsMap.resolver";

@Module({
  imports: [OrdersHashtagsMapModuleBase, forwardRef(() => AuthModule)],
  controllers: [OrdersHashtagsMapController],
  providers: [OrdersHashtagsMapService, OrdersHashtagsMapResolver],
  exports: [OrdersHashtagsMapService],
})
export class OrdersHashtagsMapModule {}
