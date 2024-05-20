import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { MENUITEM_TITLE_FIELD } from "./MenuItemTitle";
import { DISCOUNT_TITLE_FIELD } from "../discount/DiscountTitle";
import { FAVOURITE_TITLE_FIELD } from "../favourite/FavouriteTitle";
import { HASHTAG_TITLE_FIELD } from "../hashtag/HashtagTitle";
import { TIMEWINDOW_TITLE_FIELD } from "../timeWindow/TimeWindowTitle";
import { MENUSUBCATEGORY_TITLE_FIELD } from "../menuSubCategory/MenuSubCategoryTitle";

export const MenuItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Available Quantity" source="availableQuantity" />
        <TextField label="Base Price" source="basePrice" />
        <BooleanField label="Contains Egg" source="containsEgg" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Image Url" source="imageUrl" />
        <TextField label="Ingredients" source="ingredients" />
        <BooleanField label="Is Active" source="isActive" />
        <BooleanField label="Is Deliverable" source="isDeliverable" />
        <BooleanField label="Is Dinein Available" source="isDineinAvailable" />
        <BooleanField label="Is Limited Stock" source="isLimitedStock" />
        <BooleanField label="Is Pickup" source="isPickup" />
        <BooleanField label="Is Vegetarian" source="isVegetarian" />
        <ReferenceField
          label="Menu Sub Categories"
          source="menusubcategory.id"
          reference="MenuSubCategory"
        >
          <TextField source={MENUSUBCATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Name" source="name" />
        <TextField label="Preparation Time" source="preparationTime" />
        <TextField label="Share Slug" source="shareSlug" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="DailyMenuItemStock"
          target="menu_item_id"
          label="DailyMenuItemStocks"
        >
          <Datagrid rowClick="show">
            <TextField label="Available Stock" source="availableStock" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Menu Items"
              source="menuitem.id"
              reference="MenuItem"
            >
              <TextField source={MENUITEM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Total Stock" source="totalStock" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="DiscountMenuItem"
          target="menu_item_id"
          label="DiscountMenuItems"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Discount"
              source="discount.id"
              reference="Discount"
            >
              <TextField source={DISCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Menu Items"
              source="menuitem.id"
              reference="MenuItem"
            >
              <TextField source={MENUITEM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="FavouriteMenuItem"
          target="menu_item_id"
          label="FavouriteMenuItems"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Favourites"
              source="favourite.id"
              reference="Favourite"
            >
              <TextField source={FAVOURITE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Menu Items"
              source="menuitem.id"
              reference="MenuItem"
            >
              <TextField source={MENUITEM_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ItemPackagingFee"
          target="menu_item_id"
          label="ItemPackagingFees"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Menu Items"
              source="menuitem.id"
              reference="MenuItem"
            >
              <TextField source={MENUITEM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Packing Fee" source="packingFee" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MenuItemIngredient"
          target="menu_item_id"
          label="MenuItemIngredients"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Ingredient" source="ingredient" />
            <ReferenceField
              label="Menu Items"
              source="menuitem.id"
              reference="MenuItem"
            >
              <TextField source={MENUITEM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MenuItemsHashtagsMap"
          target="menu_item_id"
          label="MenuItemsHashtagsMaps"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Hashtags"
              source="hashtag.id"
              reference="Hashtag"
            >
              <TextField source={HASHTAG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Menu Items"
              source="menuitem.id"
              reference="MenuItem"
            >
              <TextField source={MENUITEM_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MenuItemsOptionsGroup"
          target="menu_item_id"
          label="MenuItemsOptionsGroups"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Lower Limit" source="lowerLimit" />
            <ReferenceField
              label="Menu Items"
              source="menuitem.id"
              reference="MenuItem"
            >
              <TextField source={MENUITEM_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="Option Group Description"
              source="optionGroupDescription"
            />
            <TextField label="Option Group Name" source="optionGroupName" />
            <TextField label="Updated At" source="updatedAt" />
            <TextField label="Upper Limit" source="upperLimit" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MenuItemsWindowMap"
          target="menu_item_id"
          label="MenuItemsWindowMaps"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is247" source="is247" />
            <ReferenceField
              label="Menu Items"
              source="menuitem.id"
              reference="MenuItem"
            >
              <TextField source={MENUITEM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Time Window"
              source="timewindow.id"
              reference="TimeWindow"
            >
              <TextField source={TIMEWINDOW_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Time Window Day" source="time_window_day" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
