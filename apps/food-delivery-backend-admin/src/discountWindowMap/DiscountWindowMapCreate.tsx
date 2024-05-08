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

import { DiscountTitle } from "../discount/DiscountTitle";
import { TimeWindowTitle } from "../timeWindow/TimeWindowTitle";

export const DiscountWindowMapCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="discount.id"
          reference="Discount"
          label="Discount"
        >
          <SelectInput optionText={DiscountTitle} />
        </ReferenceInput>
        <BooleanInput label="Is247" source="is247" />
        <ReferenceInput
          source="timeWindow.id"
          reference="TimeWindow"
          label="Time Window"
        >
          <SelectInput optionText={TimeWindowTitle} />
        </ReferenceInput>
        <SelectInput
          source="time_window_day"
          label="Time Window Day"
          choices={[
            { label: "Monday", value: "Monday" },
            { label: "Tuesday", value: "Tuesday" },
            { label: "Wednesday", value: "Wednesday" },
            { label: "Thursday", value: "Thursday" },
            { label: "Friday", value: "Friday" },
            { label: "Saturday", value: "Saturday" },
            { label: "Sunday", value: "Sunday" },
            { label: "All_Days", value: "All_Days" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
