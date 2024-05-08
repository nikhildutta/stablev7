import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DailyMenuItemStockModuleBase } from "./base/dailyMenuItemStock.module.base";
import { DailyMenuItemStockService } from "./dailyMenuItemStock.service";
import { DailyMenuItemStockController } from "./dailyMenuItemStock.controller";
import { DailyMenuItemStockResolver } from "./dailyMenuItemStock.resolver";

@Module({
  imports: [DailyMenuItemStockModuleBase, forwardRef(() => AuthModule)],
  controllers: [DailyMenuItemStockController],
  providers: [DailyMenuItemStockService, DailyMenuItemStockResolver],
  exports: [DailyMenuItemStockService],
})
export class DailyMenuItemStockModule {}
