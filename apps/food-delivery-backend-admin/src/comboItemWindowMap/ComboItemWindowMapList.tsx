import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { COMBOGROUP_TITLE_FIELD } from "../comboGroup/ComboGroupTitle";
import { TIMEWINDOW_TITLE_FIELD } from "../timeWindow/TimeWindowTitle";

export const ComboItemWindowMapList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ComboItemWindowMaps"}
      perPage={50}
      pagination={<Pagination />}
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
        <BooleanField label="Is247" source="is247" />
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
