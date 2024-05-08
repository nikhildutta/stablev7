import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DiscountWindowMapModuleBase } from "./base/discountWindowMap.module.base";
import { DiscountWindowMapService } from "./discountWindowMap.service";
import { DiscountWindowMapController } from "./discountWindowMap.controller";
import { DiscountWindowMapResolver } from "./discountWindowMap.resolver";

@Module({
  imports: [DiscountWindowMapModuleBase, forwardRef(() => AuthModule)],
  controllers: [DiscountWindowMapController],
  providers: [DiscountWindowMapService, DiscountWindowMapResolver],
  exports: [DiscountWindowMapService],
})
export class DiscountWindowMapModule {}
