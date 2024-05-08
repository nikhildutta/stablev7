import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import { APPUSER_TITLE_FIELD } from "../appUser/AppUserTitle";
import { COUPON_TITLE_FIELD } from "../coupon/CouponTitle";

export const CouponRedemptionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="App Users"
          source="appuser.id"
          reference="AppUser"
        >
          <TextField source={APPUSER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Coupons" source="coupon.id" reference="Coupon">
          <TextField source={COUPON_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Redeemed" source="isRedeemed" />
        <TextField label="Redemption Date" source="redemptionDate" />
        <TextField label="Updated At" source="updatedAt" />
      </SimpleShowLayout>
    </Show>
  );
};
