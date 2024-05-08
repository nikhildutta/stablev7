import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OrderHistoryModuleBase } from "./base/orderHistory.module.base";
import { OrderHistoryService } from "./orderHistory.service";
import { OrderHistoryController } from "./orderHistory.controller";
import { OrderHistoryResolver } from "./orderHistory.resolver";

@Module({
  imports: [OrderHistoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [OrderHistoryController],
  providers: [OrderHistoryService, OrderHistoryResolver],
  exports: [OrderHistoryService],
})
export class OrderHistoryModule {}
