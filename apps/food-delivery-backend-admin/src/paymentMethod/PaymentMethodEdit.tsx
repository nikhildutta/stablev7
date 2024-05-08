import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { OrderHistoryTitle } from "../orderHistory/OrderHistoryTitle";
import { PaymentsBookTitle } from "../paymentsBook/PaymentsBookTitle";

export const PaymentMethodEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Method Details" source="methodDetails" />
        <TextInput label="Method Name" source="methodName" />
        <ReferenceArrayInput
          source="orderHistory"
          reference="OrderHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderHistoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="paymentsBook"
          reference="PaymentsBook"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentsBookTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
