import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const RestaurantList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Restaurants"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Average Cost" source="averageCost" />
        <TextField label="Closure Status" source="closure_status" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Active" source="isActive" />
        <BooleanField label="Is Delivery" source="isDelivery" />
        <BooleanField label="Is Dine In" source="isDineIn" />
        <BooleanField label="Is Hidden" source="isHidden" />
        <BooleanField label="Is Takeaway" source="isTakeaway" />
        <TextField label="Packaging Fee Type" source="packaging_fee_type" />
        <TextField label="Restaurant Icon Url" source="restaurantIconUrl" />
        <TextField label="Restaurant Id Ref" source="restaurantIdRef" />
        <TextField label="Share Slug" source="shareSlug" />
        <TextField label="Updated At" source="updatedAt" />
      </Datagrid>
    </List>
  );
};
