import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { ComboItemTableTitle } from "../comboItemTable/ComboItemTableTitle";
import { OptionsAddonsGroupTitle } from "../optionsAddonsGroup/OptionsAddonsGroupTitle";
import { OptionsVarientsGroupTitle } from "../optionsVarientsGroup/OptionsVarientsGroupTitle";
import { OrderItemTitle } from "../orderItem/OrderItemTitle";

export const OptionsVarientsItemEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Additional Price" source="additionalPrice" />
        <ReferenceArrayInput
          source="comboItemTable"
          reference="ComboItemTable"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ComboItemTableTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="Is Default" source="isDefault" />
        <ReferenceArrayInput
          source="optionsAddonsGroup"
          reference="OptionsAddonsGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OptionsAddonsGroupTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="optionsVarientsGroup.id"
          reference="OptionsVarientsGroup"
          label="Options Varients Group"
        >
          <SelectInput optionText={OptionsVarientsGroupTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="orderItems"
          reference="OrderItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderItemTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="Variant Description" source="variantDescription" />
        <TextInput label="Variant Image Url" source="variantImageUrl" />
        <TextInput label="Variant Name" source="variantName" />
      </SimpleForm>
    </Edit>
  );
};
