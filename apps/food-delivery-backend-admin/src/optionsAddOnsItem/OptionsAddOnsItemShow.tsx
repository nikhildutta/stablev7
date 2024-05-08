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

import { OPTIONSADDONSITEM_TITLE_FIELD } from "./OptionsAddOnsItemTitle";
import { ORDERITEM_TITLE_FIELD } from "../orderItem/OrderItemTitle";
import { OPTIONSADDONSGROUP_TITLE_FIELD } from "../optionsAddonsGroup/OptionsAddonsGroupTitle";

export const OptionsAddOnsItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Add On Name" source="addOnName" />
        <TextField label="Add On Price" source="addOnPrice" />
        <TextField label="Addons Image Url" source="addonsImageUrl" />
        <BooleanField label="Contains Egg" source="containsEgg" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Vegetarian" source="isVegetarian" />
        <ReferenceField
          label="Options Addons Group"
          source="optionsaddonsgroup.id"
          reference="OptionsAddonsGroup"
        >
          <TextField source={OPTIONSADDONSGROUP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="OrderItemsAddon"
          target="option_add_on_id"
          label="OrderItemsAddons"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Options Add Ons Item"
              source="optionsaddonsitem.id"
              reference="OptionsAddOnsItem"
            >
              <TextField source={OPTIONSADDONSITEM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Order Items"
              source="orderitem.id"
              reference="OrderItem"
            >
              <TextField source={ORDERITEM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Quantity" source="quantity" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
