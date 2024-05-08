import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { DiscountTitle } from "../discount/DiscountTitle";

export const DiscountTypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
