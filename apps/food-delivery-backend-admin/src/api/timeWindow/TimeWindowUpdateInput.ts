import { ComboItemWindowMapUpdateManyWithoutTimeWindowsInput } from "./ComboItemWindowMapUpdateManyWithoutTimeWindowsInput";
import { DiscountWindowMapUpdateManyWithoutTimeWindowsInput } from "./DiscountWindowMapUpdateManyWithoutTimeWindowsInput";
import { MenuItemsWindowMapUpdateManyWithoutTimeWindowsInput } from "./MenuItemsWindowMapUpdateManyWithoutTimeWindowsInput";
import { RestaurantTimeWindowMapUpdateManyWithoutTimeWindowsInput } from "./RestaurantTimeWindowMapUpdateManyWithoutTimeWindowsInput";

export type TimeWindowUpdateInput = {
  comboItemWindowMap?: ComboItemWindowMapUpdateManyWithoutTimeWindowsInput;
  discountWindowMap?: DiscountWindowMapUpdateManyWithoutTimeWindowsInput;
  menuItemsWindowMap?: MenuItemsWindowMapUpdateManyWithoutTimeWindowsInput;
  restaurantTimeWindowMap?: RestaurantTimeWindowMapUpdateManyWithoutTimeWindowsInput;
  windowEnd?: Date | null;
  windowStart?: Date | null;
};
