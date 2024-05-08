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

import { MENUITEMSOPTIONSGROUP_TITLE_FIELD } from "./MenuItemsOptionsGroupTitle";
import { MENUITEM_TITLE_FIELD } from "../menuItem/MenuItemTitle";

export const MenuItemsOptionsGroupShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="MenuItemOption"
          target="menu_item_options_id"
          label="MenuItemOptions"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
