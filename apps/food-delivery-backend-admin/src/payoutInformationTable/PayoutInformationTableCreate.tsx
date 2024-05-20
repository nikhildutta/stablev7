import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RestaurantTitle } from "../restaurant/RestaurantTitle";

export const PayoutInformationTableCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Bank Account Number" source="bankAccountNumber" />
        <TextInput label="Bank Ifsc Code" source="bankIfscCode" />
        <DateTimeInput label="First Payout Date" source="firstPayoutDate" />
        <BooleanInput
          label="Is Bank Account Verified"
          source="isBankAccountVerified"
        />
        <TextInput label="Pan Number" source="panNumber" />
        <NumberInput
          step={1}
          label="Payout Cycle Length"
          source="payoutCycleLength"
        />
        <NumberInput
          step={1}
          label="Payout Date Offset"
          source="payoutDateOffset"
        />
        <ReferenceInput
          source="restaurants.id"
          reference="Restaurant"
          label="Restaurants"
        >
          <SelectInput optionText={RestaurantTitle} />
        </ReferenceInput>
        <TextInput label="Tan Number" source="tanNumber" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
