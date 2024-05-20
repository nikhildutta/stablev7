import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { OptionsAddOnsItemTitle } from "../optionsAddOnsItem/OptionsAddOnsItemTitle";
import { OptionsVarientsItemTitle } from "../optionsVarientsItem/OptionsVarientsItemTitle";

export const OptionsAddonsGroupCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Add On Group Name" source="addOnGroupName" />
        <NumberInput step={1} label="Lower Limit" source="lowerLimit" />
        <TextInput
          label="Options Add Ons Group Description"
          multiline
          source="optionsAddOnsGroupDescription"
        />
        <ReferenceArrayInput
          source="optionsAddOnsItem"
          reference="OptionsAddOnsItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OptionsAddOnsItemTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="optionsVarientsItem.id"
          reference="OptionsVarientsItem"
          label="Options Varients Item"
        >
          <SelectInput optionText={OptionsVarientsItemTitle} />
        </ReferenceInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
        <NumberInput step={1} label="Upper Limit" source="upperLimit" />
      </SimpleForm>
    </Create>
  );
};
