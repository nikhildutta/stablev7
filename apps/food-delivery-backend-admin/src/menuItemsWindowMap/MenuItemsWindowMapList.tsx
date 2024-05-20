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
import { MENUITEM_TITLE_FIELD } from "../menuItem/MenuItemTitle";
import { TIMEWINDOW_TITLE_FIELD } from "../timeWindow/TimeWindowTitle";

export const MenuItemsWindowMapList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MenuItemsWindowMaps"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is247" source="is247" />
        <ReferenceField
          label="Menu Items"
          source="menuitem.id"
          reference="MenuItem"
        >
          <TextField source={MENUITEM_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Time Window"
          source="timewindow.id"
          reference="TimeWindow"
        >
          <TextField source={TIMEWINDOW_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Time Window Day" source="time_window_day" />
        <TextField label="Updated At" source="updatedAt" />
      </Datagrid>
    </List>
  );
};
