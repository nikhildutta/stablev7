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
import { OptionsVarientsItemTitle } from "../optionsVarientsItem/OptionsVarientsItemTitle";

export const ComboItemTableEdit = (props: EditProps): React.ReactElement => {
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
        <BooleanInput label="Is Addon Allowed" source="isAddonAllowed" />
        <ReferenceInput
          source="optionsVarientsItem.id"
          reference="OptionsVarientsItem"
          label="Options Varients Item"
        >
          <SelectInput optionText={OptionsVarientsItemTitle} />
        </ReferenceInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
