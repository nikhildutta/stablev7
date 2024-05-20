import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { MENUCATEGORY_TITLE_FIELD } from "../menuCategory/MenuCategoryTitle";

export const MenuSubCategoryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MenuSubCategories"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
