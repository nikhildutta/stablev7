import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { OPTIONSVARIENTSGROUP_TITLE_FIELD } from "./OptionsVarientsGroupTitle";
import { MENUITEMOPTION_TITLE_FIELD } from "../menuItemOption/MenuItemOptionTitle";

export const OptionsVarientsGroupShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Menu Item Options"
          source="menuitemoption.id"
          reference="MenuItemOption"
        >
          <TextField source={MENUITEMOPTION_TITLE_FIELD} />
        </ReferenceField>
        <TextField
          label="Option Variant Group Name"
          source="optionVariantGroupName"
        />
        <TextField label="Updated At" source="updatedAt" />
        <TextField
          label="Variant Group Description"
          source="variantGroupDescription"
        />
        <ReferenceManyField
          reference="OptionsVarientsItem"
          target="option_variants_group_id"
          label="OptionsVarientsItems"
        >
          <Datagrid rowClick="show">
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
            <TextField
              label="Variant Description"
              source="variantDescription"
            />
            <TextField label="Variant Image Url" source="variantImageUrl" />
            <TextField label="Variant Name" source="variantName" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
