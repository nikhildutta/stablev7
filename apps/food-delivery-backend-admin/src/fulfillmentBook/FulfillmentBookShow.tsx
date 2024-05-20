import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  DateField,
  ReferenceField,
} from "react-admin";

import { ORDERHISTORY_TITLE_FIELD } from "../orderHistory/OrderHistoryTitle";

export const FulfillmentBookShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Accepted Order By" source="acceptedOrderBy" />
        <BooleanField
          label="Accepted Order Status"
          source="acceptedOrderStatus"
        />
        <TextField
          label="Accepted Order Status At"
          source="acceptedOrderStatusAt"
        />
        <DateField source="createdAt" label="Created At" />
        <BooleanField
          label="Customer Fulfillment Status"
          source="customerFulfillmentStatus"
        />
        <TextField
          label="Customer Fulfillment Status At"
          source="customerFulfillmentStatusAt"
        />
        <TextField label="ID" source="id" />
        <TextField label="Marked Fulfilled By" source="markedFulfilledBy" />
        <ReferenceField
          label="Order History"
          source="orderhistory.id"
          reference="OrderHistory"
        >
          <TextField source={ORDERHISTORY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Partner Pickup At" source="partnerPickupAt" />
        <TextField label="Partner Pickup By" source="partnerPickupBy" />
        <BooleanField
          label="Partner Pickup Status"
          source="partnerPickupStatus"
        />
        <TextField label="Ready For Pickup By" source="readyForPickupBy" />
        <BooleanField
          label="Ready For Pickup Status"
          source="readyForPickupStatus"
        />
        <TextField
          label="Ready For Pickup Status At"
          source="readyForPickupStatusAt"
        />
        <TextField label="Updated At" source="updatedAt" />
      </SimpleShowLayout>
    </Show>
  );
};
