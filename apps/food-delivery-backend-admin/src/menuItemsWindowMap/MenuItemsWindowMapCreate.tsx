import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { MenuItemTitle } from "../menuItem/MenuItemTitle";
import { TimeWindowTitle } from "../timeWindow/TimeWindowTitle";

export const MenuItemsWindowMapCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Is247" source="is247" />
        <ReferenceInput
          source="menuItems.id"
          reference="MenuItem"
          label="Menu Items"
        >
          <SelectInput optionText={MenuItemTitle} />
        </ReferenceInput>
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
