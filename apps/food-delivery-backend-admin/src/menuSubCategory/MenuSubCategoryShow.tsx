import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { MENUSUBCATEGORY_TITLE_FIELD } from "./MenuSubCategoryTitle";
import { MENUCATEGORY_TITLE_FIELD } from "../menuCategory/MenuCategoryTitle";

export const MenuSubCategoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Active" source="isActive" />
        <ReferenceField
          label="Menu Categories"
          source="menucategory.id"
          reference="MenuCategory"
        >
          <TextField source={MENUCATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Name" source="name" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="MenuItem"
          target="menu_sub_id"
          label="MenuItems"
        >
          <Datagrid rowClick="show">
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
            <BooleanField
              label="Is Dinein Available"
              source="isDineinAvailable"
            />
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
