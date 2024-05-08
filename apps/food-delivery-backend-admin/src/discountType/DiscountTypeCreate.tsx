import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { DiscountTitle } from "../discount/DiscountTitle";

export const DiscountTypeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="discount"
          reference="Discount"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DiscountTitle} />
        </ReferenceArrayInput>
        <TextInput label="Discount Type" source="discountType" />
      </SimpleForm>
    </Create>
  );
};
