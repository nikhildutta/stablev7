import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { OrderItemTitle } from "../orderItem/OrderItemTitle";
import { RatingTitle } from "../rating/RatingTitle";

export const OrderItemsRatingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Order Item Rating" source="orderItemRating" />
        <ReferenceInput
          source="orderItems.id"
          reference="OrderItem"
          label="Order Items"
        >
          <SelectInput optionText={OrderItemTitle} />
        </ReferenceInput>
        <ReferenceInput source="ratings.id" reference="Rating" label="Ratings">
          <SelectInput optionText={RatingTitle} />
        </ReferenceInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
