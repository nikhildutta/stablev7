import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { DailyMenuItemStockTitle } from "../dailyMenuItemStock/DailyMenuItemStockTitle";
import { DiscountMenuItemTitle } from "../discountMenuItem/DiscountMenuItemTitle";
import { FavouriteMenuItemTitle } from "../favouriteMenuItem/FavouriteMenuItemTitle";
import { ItemPackagingFeeTitle } from "../itemPackagingFee/ItemPackagingFeeTitle";
import { MenuItemIngredientTitle } from "../menuItemIngredient/MenuItemIngredientTitle";
import { MenuItemsHashtagsMapTitle } from "../menuItemsHashtagsMap/MenuItemsHashtagsMapTitle";
import { MenuItemsOptionsGroupTitle } from "../menuItemsOptionsGroup/MenuItemsOptionsGroupTitle";
import { MenuItemsWindowMapTitle } from "../menuItemsWindowMap/MenuItemsWindowMapTitle";
import { MenuSubCategoryTitle } from "../menuSubCategory/MenuSubCategoryTitle";

export const MenuItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Available Quantity"
          source="availableQuantity"
        />
        <NumberInput label="Base Price" source="basePrice" />
        <BooleanInput label="Contains Egg" source="containsEgg" />
        <ReferenceArrayInput
          source="dailyMenuItemStock"
          reference="DailyMenuItemStock"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DailyMenuItemStockTitle} />
        </ReferenceArrayInput>
        <TextInput label="Description" source="description" />
        <ReferenceArrayInput
          source="discountMenuItem"
          reference="DiscountMenuItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DiscountMenuItemTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="favouriteMenuItems"
          reference="FavouriteMenuItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FavouriteMenuItemTitle} />
        </ReferenceArrayInput>
        <TextInput label="Image Url" source="imageUrl" />
        <TextInput label="Ingredients" source="ingredients" />
        <BooleanInput label="Is Active" source="isActive" />
        <BooleanInput label="Is Deliverable" source="isDeliverable" />
        <BooleanInput label="Is Dinein Available" source="isDineinAvailable" />
        <BooleanInput label="Is Limited Stock" source="isLimitedStock" />
        <BooleanInput label="Is Pickup" source="isPickup" />
        <BooleanInput label="Is Vegetarian" source="isVegetarian" />
        <ReferenceArrayInput
          source="itemPackagingFee"
          reference="ItemPackagingFee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ItemPackagingFeeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="menuItemIngredients"
          reference="MenuItemIngredient"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MenuItemIngredientTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="menuItemsHashtagsMap"
          reference="MenuItemsHashtagsMap"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MenuItemsHashtagsMapTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="menuItemsOptionsGroups"
          reference="MenuItemsOptionsGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MenuItemsOptionsGroupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="menuItemsWindowMap"
          reference="MenuItemsWindowMap"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MenuItemsWindowMapTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="menuSubCategories.id"
          reference="MenuSubCategory"
          label="Menu Sub Categories"
        >
          <SelectInput optionText={MenuSubCategoryTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <NumberInput
          step={1}
          label="Preparation Time"
          source="preparationTime"
        />
        <TextInput label="Share Slug" source="shareSlug" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
