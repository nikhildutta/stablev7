import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { MENUITEMSOPTIONSGROUP_TITLE_FIELD } from "../menuItemsOptionsGroup/MenuItemsOptionsGroupTitle";

export const MenuItemOptionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MenuItemOptions"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
