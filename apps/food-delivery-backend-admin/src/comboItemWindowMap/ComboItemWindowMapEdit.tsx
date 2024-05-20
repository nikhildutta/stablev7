import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

import { ComboGroupTitle } from "../comboGroup/ComboGroupTitle";
import { TimeWindowTitle } from "../timeWindow/TimeWindowTitle";

export const ComboItemWindowMapEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="comboGroups.id"
          reference="ComboGroup"
          label="Combo Groups"
        >
          <SelectInput optionText={ComboGroupTitle} />
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
    </Edit>
  );
};
