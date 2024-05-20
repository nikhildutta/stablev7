import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DiscountTypeModuleBase } from "./base/discountType.module.base";
import { DiscountTypeService } from "./discountType.service";
import { DiscountTypeController } from "./discountType.controller";
import { DiscountTypeResolver } from "./discountType.resolver";

@Module({
  imports: [DiscountTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [DiscountTypeController],
  providers: [DiscountTypeService, DiscountTypeResolver],
  exports: [DiscountTypeService],
})
export class DiscountTypeModule {}
