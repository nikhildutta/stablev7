import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  BooleanInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { CouponTitle } from "../coupon/CouponTitle";
import { DiscountMenuItemTitle } from "../discountMenuItem/DiscountMenuItemTitle";
import { DiscountTypeTitle } from "../discountType/DiscountTypeTitle";
import { DiscountWindowMapTitle } from "../discountWindowMap/DiscountWindowMapTitle";

export const DiscountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="coupons"
          reference="Coupon"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CouponTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="discountMenuItem"
          reference="DiscountMenuItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DiscountMenuItemTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="discountType.id"
          reference="DiscountType"
          label="Discount Type"
        >
          <SelectInput optionText={DiscountTypeTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="discountWindowMap"
          reference="DiscountWindowMap"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DiscountWindowMapTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Expiration Date" source="expirationDate" />
        <BooleanInput label="Is Active" source="isActive" />
        <NumberInput step={1} label="Max Discount" source="maxDiscount" />
        <NumberInput
          step={1}
          label="Minimum Order Value"
          source="minimumOrderValue"
        />
        <TextInput label="Type Of Discount" source="typeOfDiscount" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <NumberInput label="Value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
