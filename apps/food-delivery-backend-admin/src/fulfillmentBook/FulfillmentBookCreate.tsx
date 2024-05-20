import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { OrderHistoryTitle } from "../orderHistory/OrderHistoryTitle";

export const FulfillmentBookCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Accepted Order By" source="acceptedOrderBy" />
        <BooleanInput
          label="Accepted Order Status"
          source="acceptedOrderStatus"
        />
        <DateTimeInput
          label="Accepted Order Status At"
          source="acceptedOrderStatusAt"
        />
        <BooleanInput
          label="Customer Fulfillment Status"
          source="customerFulfillmentStatus"
        />
        <DateTimeInput
          label="Customer Fulfillment Status At"
          source="customerFulfillmentStatusAt"
        />
        <TextInput label="Marked Fulfilled By" source="markedFulfilledBy" />
        <ReferenceInput
          source="orderHistory.id"
          reference="OrderHistory"
          label="Order History"
        >
          <SelectInput optionText={OrderHistoryTitle} />
        </ReferenceInput>
        <DateTimeInput label="Partner Pickup At" source="partnerPickupAt" />
        <TextInput label="Partner Pickup By" source="partnerPickupBy" />
        <BooleanInput
          label="Partner Pickup Status"
          source="partnerPickupStatus"
        />
        <TextInput label="Ready For Pickup By" source="readyForPickupBy" />
        <BooleanInput
          label="Ready For Pickup Status"
          source="readyForPickupStatus"
        />
        <DateTimeInput
          label="Ready For Pickup Status At"
          source="readyForPickupStatusAt"
        />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
