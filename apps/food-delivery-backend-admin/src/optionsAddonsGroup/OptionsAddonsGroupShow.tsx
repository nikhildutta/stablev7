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

import { OPTIONSADDONSGROUP_TITLE_FIELD } from "./OptionsAddonsGroupTitle";
import { OPTIONSVARIENTSITEM_TITLE_FIELD } from "../optionsVarientsItem/OptionsVarientsItemTitle";

export const OptionsAddonsGroupShow = (
  props: ShowProps
): React.ReactElement => {
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
        <ReferenceManyField
          reference="OptionsAddOnsItem"
          target="add_on_group_id"
          label="OptionsAddOnsItems"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
