import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { MenuItemTitle } from "../menuItem/MenuItemTitle";

export const DailyMenuItemStockCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Available Stock" source="availableStock" />
        <ReferenceInput
          source="menuItems.id"
          reference="MenuItem"
          label="Menu Items"
        >
          <SelectInput optionText={MenuItemTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Total Stock" source="totalStock" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
