import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DiscountMenuItemModuleBase } from "./base/discountMenuItem.module.base";
import { DiscountMenuItemService } from "./discountMenuItem.service";
import { DiscountMenuItemController } from "./discountMenuItem.controller";
import { DiscountMenuItemResolver } from "./discountMenuItem.resolver";

@Module({
  imports: [DiscountMenuItemModuleBase, forwardRef(() => AuthModule)],
  controllers: [DiscountMenuItemController],
  providers: [DiscountMenuItemService, DiscountMenuItemResolver],
  exports: [DiscountMenuItemService],
})
export class DiscountMenuItemModule {}
