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

import { MENUITEMOPTION_TITLE_FIELD } from "./MenuItemOptionTitle";
import { MENUITEMSOPTIONSGROUP_TITLE_FIELD } from "../menuItemsOptionsGroup/MenuItemsOptionsGroupTitle";

export const MenuItemOptionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Additional Price" source="additionalPrice" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Default" source="isDefault" />
        <ReferenceField
          label="Menu Items Options Groups"
          source="menuitemsoptionsgroup.id"
          reference="MenuItemsOptionsGroup"
        >
          <TextField source={MENUITEMSOPTIONSGROUP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Name" source="name" />
        <TextField label="Option Image Url" source="optionImageUrl" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="OptionsVarientsGroup"
          target="option_id"
          label="OptionsVarientsGroups"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
