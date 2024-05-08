import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

import { CouponRedemptionTitle } from "../couponRedemption/CouponRedemptionTitle";
import { DiscountTitle } from "../discount/DiscountTitle";
import { OrderHistoryTitle } from "../orderHistory/OrderHistoryTitle";

export const CouponEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <ReferenceArrayInput
          source="couponRedemptions"
          reference="CouponRedemption"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CouponRedemptionTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="discount.id"
          reference="Discount"
          label="Discount"
        >
          <SelectInput optionText={DiscountTitle} />
        </ReferenceInput>
        <DateTimeInput label="Expiration Date" source="expirationDate" />
        <BooleanInput label="Is Active" source="isActive" />
        <ReferenceArrayInput
          source="orderHistory"
          reference="OrderHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderHistoryTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
