import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

import { AppUserTitle } from "../appUser/AppUserTitle";
import { CouponTitle } from "../coupon/CouponTitle";

export const CouponRedemptionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="appUsers.id"
          reference="AppUser"
          label="App Users"
        >
          <SelectInput optionText={AppUserTitle} />
        </ReferenceInput>
        <ReferenceInput source="coupons.id" reference="Coupon" label="Coupons">
          <SelectInput optionText={CouponTitle} />
        </ReferenceInput>
        <BooleanInput label="Is Redeemed" source="isRedeemed" />
        <DateTimeInput label="Redemption Date" source="redemptionDate" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
