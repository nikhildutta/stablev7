import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { DISCOUNT_TITLE_FIELD } from "../discount/DiscountTitle";
import { TIMEWINDOW_TITLE_FIELD } from "../timeWindow/TimeWindowTitle";

export const DiscountWindowMapList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DiscountWindowMaps"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Discount"
          source="discount.id"
          reference="Discount"
        >
          <TextField source={DISCOUNT_TITLE_FIELD} />
        </ReferenceField>
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
