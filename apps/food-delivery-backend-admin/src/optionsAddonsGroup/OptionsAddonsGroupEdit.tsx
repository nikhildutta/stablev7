import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { OptionsAddOnsItemTitle } from "../optionsAddOnsItem/OptionsAddOnsItemTitle";
import { OptionsVarientsItemTitle } from "../optionsVarientsItem/OptionsVarientsItemTitle";

export const OptionsAddonsGroupEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Add On Name" source="addOnName" />
        <NumberInput label="Add On Price" source="addOnPrice" />
        <TextInput label="Addons Image Url" source="addonsImageUrl" />
        <BooleanInput label="Contains Egg" source="containsEgg" />
        <BooleanInput label="Is Vegetarian" source="isVegetarian" />
        <NumberInput step={1} label="Lower Limit" source="lowerLimit" />
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
    </Edit>
  );
};
