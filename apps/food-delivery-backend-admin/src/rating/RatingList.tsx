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

export const RatingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Ratings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Cleanliness" source="cleanliness" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Food Quality" source="foodQuality" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Order History"
          source="orderhistory.id"
          reference="OrderHistory"
        >
          <TextField source={ORDERHISTORY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Rating For Customer" source="ratingForCustomer" />
        <TextField label="Rating Of Delivery" source="ratingOfDelivery" />
        <TextField label="Rating Of Order" source="ratingOfOrder" />
        <TextField label="Service" source="service" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="Value For Money" source="valueForMoney" />
      </Datagrid>
    </List>
  );
};
