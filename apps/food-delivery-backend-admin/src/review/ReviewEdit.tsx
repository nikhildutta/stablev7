import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { OrderHistoryTitle } from "../orderHistory/OrderHistoryTitle";

export const ReviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
