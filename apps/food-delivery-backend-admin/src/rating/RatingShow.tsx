import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ORDERITEM_TITLE_FIELD } from "../orderItem/OrderItemTitle";
import { RATING_TITLE_FIELD } from "./RatingTitle";
import { ORDERHISTORY_TITLE_FIELD } from "../orderHistory/OrderHistoryTitle";

export const RatingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="OrderItemsRating"
          target="rating_id"
          label="OrderItemsRatings"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Order Item Rating" source="orderItemRating" />
            <ReferenceField
              label="Order Items"
              source="orderitem.id"
              reference="OrderItem"
            >
              <TextField source={ORDERITEM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Ratings"
              source="rating.id"
              reference="Rating"
            >
              <TextField source={RATING_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
