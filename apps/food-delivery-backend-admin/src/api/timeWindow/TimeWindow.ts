import { ComboItemWindowMap } from "../comboItemWindowMap/ComboItemWindowMap";
import { DiscountWindowMap } from "../discountWindowMap/DiscountWindowMap";
import { MenuItemsWindowMap } from "../menuItemsWindowMap/MenuItemsWindowMap";
import { RestaurantTimeWindowMap } from "../restaurantTimeWindowMap/RestaurantTimeWindowMap";

export type TimeWindow = {
  comboItemWindowMap?: Array<ComboItemWindowMap>;
  discountWindowMap?: Array<DiscountWindowMap>;
  id: string;
  menuItemsWindowMap?: Array<MenuItemsWindowMap>;
  restaurantTimeWindowMap?: Array<RestaurantTimeWindowMap>;
  windowEnd: Date | null;
  windowStart: Date | null;
};
