import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ORDERHISTORY_TITLE_FIELD } from "../orderHistory/OrderHistoryTitle";

export const ReviewList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Reviews"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Body" source="body" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Order History"
          source="orderhistory.id"
          reference="OrderHistory"
        >
          <TextField source={ORDERHISTORY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Review Img" source="reviewImg" />
        <TextField label="Title" source="title" />
        <TextField label="Updated At" source="updatedAt" />
      </Datagrid>
    </List>
  );
};
