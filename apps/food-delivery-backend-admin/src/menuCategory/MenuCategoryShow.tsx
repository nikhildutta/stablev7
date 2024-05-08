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

import { MENUCATEGORY_TITLE_FIELD } from "./MenuCategoryTitle";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";

export const MenuCategoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Active" source="isActive" />
        <TextField label="Name" source="name" />
        <ReferenceField
          label="Restaurants"
          source="restaurant.id"
          reference="Restaurant"
        >
          <TextField source={RESTAURANT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="MenuSubCategory"
          target="menu_id"
          label="MenuSubCategories"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
