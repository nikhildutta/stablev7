import { Decimal } from "decimal.js";
import { DailyMenuItemStockCreateNestedManyWithoutMenuItemsInput } from "./DailyMenuItemStockCreateNestedManyWithoutMenuItemsInput";
import { DiscountMenuItemCreateNestedManyWithoutMenuItemsInput } from "./DiscountMenuItemCreateNestedManyWithoutMenuItemsInput";
import { FavouriteMenuItemCreateNestedManyWithoutMenuItemsInput } from "./FavouriteMenuItemCreateNestedManyWithoutMenuItemsInput";
import { ItemPackagingFeeCreateNestedManyWithoutMenuItemsInput } from "./ItemPackagingFeeCreateNestedManyWithoutMenuItemsInput";
import { MenuItemIngredientCreateNestedManyWithoutMenuItemsInput } from "./MenuItemIngredientCreateNestedManyWithoutMenuItemsInput";
import { MenuItemsHashtagsMapCreateNestedManyWithoutMenuItemsInput } from "./MenuItemsHashtagsMapCreateNestedManyWithoutMenuItemsInput";
import { MenuItemsOptionsGroupCreateNestedManyWithoutMenuItemsInput } from "./MenuItemsOptionsGroupCreateNestedManyWithoutMenuItemsInput";
import { MenuItemsWindowMapCreateNestedManyWithoutMenuItemsInput } from "./MenuItemsWindowMapCreateNestedManyWithoutMenuItemsInput";
import { MenuSubCategoryWhereUniqueInput } from "../menuSubCategory/MenuSubCategoryWhereUniqueInput";

export type MenuItemCreateInput = {
  availableQuantity?: number | null;
  basePrice?: Decimal | null;
  containsEgg?: boolean | null;
  dailyMenuItemStock?: DailyMenuItemStockCreateNestedManyWithoutMenuItemsInput;
  description?: string | null;
  discountMenuItem?: DiscountMenuItemCreateNestedManyWithoutMenuItemsInput;
  favouriteMenuItems?: FavouriteMenuItemCreateNestedManyWithoutMenuItemsInput;
  imageUrl?: string | null;
  ingredients?: string | null;
  isActive?: boolean | null;
  isDeliverable?: boolean | null;
  isDineinAvailable?: boolean | null;
  isLimitedStock?: boolean | null;
  isPickup?: boolean | null;
  isVegetarian?: boolean | null;
  itemPackagingFee?: ItemPackagingFeeCreateNestedManyWithoutMenuItemsInput;
  menuItemIngredients?: MenuItemIngredientCreateNestedManyWithoutMenuItemsInput;
  menuItemsHashtagsMap?: MenuItemsHashtagsMapCreateNestedManyWithoutMenuItemsInput;
  menuItemsOptionsGroups?: MenuItemsOptionsGroupCreateNestedManyWithoutMenuItemsInput;
  menuItemsWindowMap?: MenuItemsWindowMapCreateNestedManyWithoutMenuItemsInput;
  menuSubCategories: MenuSubCategoryWhereUniqueInput;
  name?: string | null;
  preparationTime?: number | null;
  shareSlug?: string | null;
  updatedAt?: Date | null;
};