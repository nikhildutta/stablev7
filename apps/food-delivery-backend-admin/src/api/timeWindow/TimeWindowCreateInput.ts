import { ComboItemWindowMapCreateNestedManyWithoutTimeWindowsInput } from "./ComboItemWindowMapCreateNestedManyWithoutTimeWindowsInput";
import { DiscountWindowMapCreateNestedManyWithoutTimeWindowsInput } from "./DiscountWindowMapCreateNestedManyWithoutTimeWindowsInput";
import { MenuItemsWindowMapCreateNestedManyWithoutTimeWindowsInput } from "./MenuItemsWindowMapCreateNestedManyWithoutTimeWindowsInput";
import { RestaurantTimeWindowMapCreateNestedManyWithoutTimeWindowsInput } from "./RestaurantTimeWindowMapCreateNestedManyWithoutTimeWindowsInput";

export type TimeWindowCreateInput = {
  comboItemWindowMap?: ComboItemWindowMapCreateNestedManyWithoutTimeWindowsInput;
  discountWindowMap?: DiscountWindowMapCreateNestedManyWithoutTimeWindowsInput;
  menuItemsWindowMap?: MenuItemsWindowMapCreateNestedManyWithoutTimeWindowsInput;
  restaurantTimeWindowMap?: RestaurantTimeWindowMapCreateNestedManyWithoutTimeWindowsInput;
  windowEnd?: Date | null;
  windowStart?: Date | null;
};
