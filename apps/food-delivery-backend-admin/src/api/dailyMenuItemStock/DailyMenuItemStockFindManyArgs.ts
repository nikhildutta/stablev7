import { DailyMenuItemStockWhereInput } from "./DailyMenuItemStockWhereInput";
import { DailyMenuItemStockOrderByInput } from "./DailyMenuItemStockOrderByInput";

export type DailyMenuItemStockFindManyArgs = {
  where?: DailyMenuItemStockWhereInput;
  orderBy?: Array<DailyMenuItemStockOrderByInput>;
  skip?: number;
  take?: number;
};
