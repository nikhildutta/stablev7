import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MENUITEMOPTION_TITLE_FIELD } from "../menuItemOption/MenuItemOptionTitle";

export const OptionsVarientsGroupList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"OptionsVarientsGroups"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
