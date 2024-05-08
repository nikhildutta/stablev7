import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { MenuItemOptionTitle } from "../menuItemOption/MenuItemOptionTitle";
import { OptionsVarientsItemTitle } from "../optionsVarientsItem/OptionsVarientsItemTitle";

export const OptionsVarientsGroupCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="menuItemOptions.id"
          reference="MenuItemOption"
          label="Menu Item Options"
        >
          <SelectInput optionText={MenuItemOptionTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="optionsVarientsItem"
          reference="OptionsVarientsItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OptionsVarientsItemTitle} />
        </ReferenceArrayInput>
        <TextInput
          label="Option Variant Group Name"
          source="optionVariantGroupName"
        />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput
          label="Variant Group Description"
          source="variantGroupDescription"
        />
      </SimpleForm>
    </Create>
  );
};
