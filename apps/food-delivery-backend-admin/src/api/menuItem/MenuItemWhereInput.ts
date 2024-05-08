import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DailyMenuItemStockListRelationFilter } from "../dailyMenuItemStock/DailyMenuItemStockListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DiscountMenuItemListRelationFilter } from "../discountMenuItem/DiscountMenuItemListRelationFilter";
import { FavouriteMenuItemListRelationFilter } from "../favouriteMenuItem/FavouriteMenuItemListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItemPackagingFeeListRelationFilter } from "../itemPackagingFee/ItemPackagingFeeListRelationFilter";
import { MenuItemIngredientListRelationFilter } from "../menuItemIngredient/MenuItemIngredientListRelationFilter";
import { MenuItemsHashtagsMapListRelationFilter } from "../menuItemsHashtagsMap/MenuItemsHashtagsMapListRelationFilter";
import { MenuItemsOptionsGroupListRelationFilter } from "../menuItemsOptionsGroup/MenuItemsOptionsGroupListRelationFilter";
import { MenuItemsWindowMapListRelationFilter } from "../menuItemsWindowMap/MenuItemsWindowMapListRelationFilter";
import { MenuSubCategoryWhereUniqueInput } from "../menuSubCategory/MenuSubCategoryWhereUniqueInput";

export type MenuItemWhereInput = {
  availableQuantity?: IntNullableFilter;
  basePrice?: DecimalNullableFilter;
  containsEgg?: BooleanNullableFilter;
  createdAt?: DateTimeNullableFilter;
  dailyMenuItemStock?: DailyMenuItemStockListRelationFilter;
  description?: StringNullableFilter;
  discountMenuItem?: DiscountMenuItemListRelationFilter;
  favouriteMenuItems?: FavouriteMenuItemListRelationFilter;
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  ingredients?: StringNullableFilter;
  isActive?: BooleanNullableFilter;
  isDeliverable?: BooleanNullableFilter;
  isDineinAvailable?: BooleanNullableFilter;
  isLimitedStock?: BooleanNullableFilter;
  isPickup?: BooleanNullableFilter;
  isVegetarian?: BooleanNullableFilter;
  itemPackagingFee?: ItemPackagingFeeListRelationFilter;
  menuItemIngredients?: MenuItemIngredientListRelationFilter;
  menuItemsHashtagsMap?: MenuItemsHashtagsMapListRelationFilter;
  menuItemsOptionsGroups?: MenuItemsOptionsGroupListRelationFilter;
  menuItemsWindowMap?: MenuItemsWindowMapListRelationFilter;
  menuSubCategories?: MenuSubCategoryWhereUniqueInput;
  name?: StringNullableFilter;
  preparationTime?: IntNullableFilter;
  shareSlug?: StringNullableFilter;
  updatedAt?: DateTimeNullableFilter;
};