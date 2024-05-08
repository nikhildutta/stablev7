import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { OrderHistoryTitle } from "../orderHistory/OrderHistoryTitle";

export const ReviewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Body" source="body" />
        <ReferenceInput
          source="orderHistory.id"
          reference="OrderHistory"
          label="Order History"
        >
          <SelectInput optionText={OrderHistoryTitle} />
        </ReferenceInput>
        <TextInput label="Review Img" source="reviewImg" />
        <TextInput label="Title" source="title" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
