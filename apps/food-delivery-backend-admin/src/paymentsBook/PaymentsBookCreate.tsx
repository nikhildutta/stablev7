import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

import { ComplaintsBookTitle } from "../complaintsBook/ComplaintsBookTitle";
import { OrderHistoryTitle } from "../orderHistory/OrderHistoryTitle";
import { PaymentMethodTitle } from "../paymentMethod/PaymentMethodTitle";

export const PaymentsBookCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="complaintsBook"
          reference="ComplaintsBook"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ComplaintsBookTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Error Code" source="errorCode" />
        <ReferenceInput
          source="orderHistory.id"
          reference="OrderHistory"
          label="Order History"
        >
          <SelectInput optionText={OrderHistoryTitle} />
        </ReferenceInput>
        <NumberInput label="Payment Amount" source="paymentAmount" />
        <TextInput label="Payment Currency" source="paymentCurrency" />
        <DateTimeInput label="Payment Date" source="paymentDate" />
        <ReferenceInput
          source="paymentMethods.id"
          reference="PaymentMethod"
          label="Payment Methods"
        >
          <SelectInput optionText={PaymentMethodTitle} />
        </ReferenceInput>
        <BooleanInput label="Payment Status" source="paymentStatus" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
