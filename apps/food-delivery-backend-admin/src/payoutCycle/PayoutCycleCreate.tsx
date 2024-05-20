import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  SelectInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { RestaurantTitle } from "../restaurant/RestaurantTitle";
import { SettlementsBreakupTitle } from "../settlementsBreakup/SettlementsBreakupTitle";

export const PayoutCycleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Net Payout" source="netPayout" />
        <NumberInput
          step={1}
          label="Number Of Orders"
          source="numberOfOrders"
        />
        <SelectInput
          source="payout_status"
          label="Payout Status"
          choices={[
            { label: "Cycle_Inprogress", value: "Cycle_Inprogress" },
            { label: "Cycle_Complete", value: "Cycle_Complete" },
            { label: "Statement_Generated", value: "Statement_Generated" },
            { label: "Payout_In_Process", value: "Payout_In_Process" },
            { label: "Settled", value: "Settled" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="restaurants.id"
          reference="Restaurant"
          label="Restaurants"
        >
          <SelectInput optionText={RestaurantTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="settlementsBreakup"
          reference="SettlementsBreakup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SettlementsBreakupTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Time Period End" source="timePeriodEnd" />
        <DateTimeInput label="Time Period Start" source="timePeriodStart" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="Utr Number" source="utrNumber" />
        <NumberInput step={1} label="Week Number" source="weekNumber" />
      </SimpleForm>
    </Create>
  );
};
