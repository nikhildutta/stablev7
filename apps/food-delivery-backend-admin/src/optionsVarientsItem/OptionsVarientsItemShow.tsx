import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { COMBOGROUP_TITLE_FIELD } from "../comboGroup/ComboGroupTitle";
import { OPTIONSVARIENTSITEM_TITLE_FIELD } from "./OptionsVarientsItemTitle";
import { ORDERHISTORY_TITLE_FIELD } from "../orderHistory/OrderHistoryTitle";
import { OPTIONSVARIENTSGROUP_TITLE_FIELD } from "../optionsVarientsGroup/OptionsVarientsGroupTitle";

export const OptionsVarientsItemShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Additional Price" source="additionalPrice" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Default" source="isDefault" />
        <ReferenceField
          label="Options Varients Group"
          source="optionsvarientsgroup.id"
          reference="OptionsVarientsGroup"
        >
          <TextField source={OPTIONSVARIENTSGROUP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="Variant Description" source="variantDescription" />
        <TextField label="Variant Image Url" source="variantImageUrl" />
        <TextField label="Variant Name" source="variantName" />
        <ReferenceManyField
          reference="ComboItemTable"
          target="option_variant_id"
          label="ComboItemTables"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Combo Groups"
              source="combogroup.id"
              reference="ComboGroup"
            >
              <TextField source={COMBOGROUP_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Addon Allowed" source="isAddonAllowed" />
            <ReferenceField
              label="Options Varients Item"
              source="optionsvarientsitem.id"
              reference="OptionsVarientsItem"
            >
              <TextField source={OPTIONSVARIENTSITEM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OptionsAddonsGroup"
          target="option_variant_id"
          label="OptionsAddonsGroups"
        >
          <Datagrid rowClick="show">
            <TextField label="Add On Name" source="addOnName" />
            <TextField label="Add On Price" source="addOnPrice" />
            <TextField label="Addons Image Url" source="addonsImageUrl" />
            <BooleanField label="Contains Egg" source="containsEgg" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Vegetarian" source="isVegetarian" />
            <TextField label="Lower Limit" source="lowerLimit" />
            <ReferenceField
              label="Options Varients Item"
              source="optionsvarientsitem.id"
              reference="OptionsVarientsItem"
            >
              <TextField source={OPTIONSVARIENTSITEM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
            <TextField label="Upper Limit" source="upperLimit" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OrderItem"
          target="option_variant_id"
          label="OrderItems"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField
              label="Customization Options"
              source="customizationOptions"
            />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Options Varients Item"
              source="optionsvarientsitem.id"
              reference="OptionsVarientsItem"
            >
              <TextField source={OPTIONSVARIENTSITEM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Order History"
              source="orderhistory.id"
              reference="OrderHistory"
            >
              <TextField source={ORDERHISTORY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Quantity" source="quantity" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
