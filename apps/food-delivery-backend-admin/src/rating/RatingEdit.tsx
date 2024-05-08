import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { OrderHistoryTitle } from "../orderHistory/OrderHistoryTitle";
import { OrderItemsRatingTitle } from "../orderItemsRating/OrderItemsRatingTitle";

export const RatingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Cleanliness" source="cleanliness" />
        <NumberInput label="Food Quality" source="foodQuality" />
        <ReferenceInput
          source="orderHistory.id"
          reference="OrderHistory"
          label="Order History"
        >
          <SelectInput optionText={OrderHistoryTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="orderItemsRatings"
          reference="OrderItemsRating"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderItemsRatingTitle} />
        </ReferenceArrayInput>
        <NumberInput label="Rating For Customer" source="ratingForCustomer" />
        <NumberInput label="Rating Of Delivery" source="ratingOfDelivery" />
        <NumberInput label="Rating Of Order" source="ratingOfOrder" />
        <NumberInput label="Service" source="service" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <NumberInput label="Value For Money" source="valueForMoney" />
      </SimpleForm>
    </Edit>
  );
};
