import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { MenuItemsOptionsGroupTitle } from "../menuItemsOptionsGroup/MenuItemsOptionsGroupTitle";
import { OptionsVarientsGroupTitle } from "../optionsVarientsGroup/OptionsVarientsGroupTitle";

export const MenuItemOptionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Additional Price" source="additionalPrice" />
        <TextInput label="Description" source="description" />
        <BooleanInput label="Is Default" source="isDefault" />
        <ReferenceInput
          source="menuItemsOptionsGroups.id"
          reference="MenuItemsOptionsGroup"
          label="Menu Items Options Groups"
        >
          <SelectInput optionText={MenuItemsOptionsGroupTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <TextInput label="Option Image Url" source="optionImageUrl" />
        <ReferenceArrayInput
          source="optionsVarientsGroup"
          reference="OptionsVarientsGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OptionsVarientsGroupTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
