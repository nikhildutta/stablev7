import { DiscountMenuItemWhereInput } from "./DiscountMenuItemWhereInput";
import { DiscountMenuItemOrderByInput } from "./DiscountMenuItemOrderByInput";

export type DiscountMenuItemFindManyArgs = {
  where?: DiscountMenuItemWhereInput;
  orderBy?: Array<DiscountMenuItemOrderByInput>;
  skip?: number;
  take?: number;
};
