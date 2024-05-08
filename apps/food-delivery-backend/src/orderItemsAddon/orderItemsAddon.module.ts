import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OrderItemsAddonModuleBase } from "./base/orderItemsAddon.module.base";
import { OrderItemsAddonService } from "./orderItemsAddon.service";
import { OrderItemsAddonController } from "./orderItemsAddon.controller";
import { OrderItemsAddonResolver } from "./orderItemsAddon.resolver";

@Module({
  imports: [OrderItemsAddonModuleBase, forwardRef(() => AuthModule)],
  controllers: [OrderItemsAddonController],
  providers: [OrderItemsAddonService, OrderItemsAddonResolver],
  exports: [OrderItemsAddonService],
})
export class OrderItemsAddonModule {}
