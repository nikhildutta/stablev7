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
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";

export const PayoutCycleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PayoutCycles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Net Payout" source="netPayout" />
        <TextField label="Number Of Orders" source="numberOfOrders" />
        <TextField label="Payout Status" source="payout_status" />
        <ReferenceField
          label="Restaurants"
          source="restaurant.id"
          reference="Restaurant"
        >
          <TextField source={RESTAURANT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Time Period End" source="timePeriodEnd" />
        <TextField label="Time Period Start" source="timePeriodStart" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="Utr Number" source="utrNumber" />
        <TextField label="Week Number" source="weekNumber" />
      </Datagrid>
    </List>
  );
};
