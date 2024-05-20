import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { OptionsAddonsGroupTitle } from "../optionsAddonsGroup/OptionsAddonsGroupTitle";
import { OrderItemsAddonTitle } from "../orderItemsAddon/OrderItemsAddonTitle";

export const OptionsAddOnsItemCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Add On Name" source="addOnName" />
        <NumberInput label="Add On Price" source="addOnPrice" />
        <TextInput label="Addons Image Url" source="addonsImageUrl" />
        <BooleanInput label="Contains Egg" source="containsEgg" />
        <BooleanInput label="Is Vegetarian" source="isVegetarian" />
        <ReferenceInput
          source="optionsAddonsGroup.id"
          reference="OptionsAddonsGroup"
          label="Options Addons Group"
        >
          <SelectInput optionText={OptionsAddonsGroupTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="orderItemsAddons"
          reference="OrderItemsAddon"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderItemsAddonTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
