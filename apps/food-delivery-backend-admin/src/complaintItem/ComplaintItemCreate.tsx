import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

import { ComplaintsBookTitle } from "../complaintsBook/ComplaintsBookTitle";
import { OrderItemTitle } from "../orderItem/OrderItemTitle";

export const ComplaintItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="complaintsBook.id"
          reference="ComplaintsBook"
          label="Complaints Book"
        >
          <SelectInput optionText={ComplaintsBookTitle} />
        </ReferenceInput>
        <BooleanInput label="Is Refund" source="isRefund" />
        <ReferenceInput
          source="orderItems.id"
          reference="OrderItem"
          label="Order Items"
        >
          <SelectInput optionText={OrderItemTitle} />
        </ReferenceInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
