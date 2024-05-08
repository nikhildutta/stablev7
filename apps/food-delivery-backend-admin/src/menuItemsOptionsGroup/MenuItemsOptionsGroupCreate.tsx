import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { MenuItemOptionTitle } from "../menuItemOption/MenuItemOptionTitle";
import { MenuItemTitle } from "../menuItem/MenuItemTitle";

export const MenuItemsOptionsGroupCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Lower Limit" source="lowerLimit" />
        <ReferenceArrayInput
          source="menuItemOptions"
          reference="MenuItemOption"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MenuItemOptionTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="menuItems.id"
          reference="MenuItem"
          label="Menu Items"
        >
          <SelectInput optionText={MenuItemTitle} />
        </ReferenceInput>
        <TextInput
          label="Option Group Description"
          source="optionGroupDescription"
        />
        <TextInput label="Option Group Name" source="optionGroupName" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <NumberInput step={1} label="Upper Limit" source="upperLimit" />
      </SimpleForm>
    </Create>
  );
};
