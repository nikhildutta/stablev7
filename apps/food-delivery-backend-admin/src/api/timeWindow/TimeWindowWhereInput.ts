import { ComboItemWindowMapListRelationFilter } from "../comboItemWindowMap/ComboItemWindowMapListRelationFilter";
import { DiscountWindowMapListRelationFilter } from "../discountWindowMap/DiscountWindowMapListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { MenuItemsWindowMapListRelationFilter } from "../menuItemsWindowMap/MenuItemsWindowMapListRelationFilter";
import { RestaurantTimeWindowMapListRelationFilter } from "../restaurantTimeWindowMap/RestaurantTimeWindowMapListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TimeWindowWhereInput = {
  comboItemWindowMap?: ComboItemWindowMapListRelationFilter;
  discountWindowMap?: DiscountWindowMapListRelationFilter;
  id?: StringFilter;
  menuItemsWindowMap?: MenuItemsWindowMapListRelationFilter;
  restaurantTimeWindowMap?: RestaurantTimeWindowMapListRelationFilter;
  windowEnd?: DateTimeNullableFilter;
  windowStart?: DateTimeNullableFilter;
};
