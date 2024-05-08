import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { APPUSER_TITLE_FIELD } from "../appUser/AppUserTitle";
import { COUPON_TITLE_FIELD } from "./CouponTitle";
import { ADDRESS_TITLE_FIELD } from "../address/AddressTitle";
import { PAYMENTMETHOD_TITLE_FIELD } from "../paymentMethod/PaymentMethodTitle";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";
import { DISCOUNT_TITLE_FIELD } from "../discount/DiscountTitle";

export const CouponShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Discount"
          source="discount.id"
          reference="Discount"
        >
          <TextField source={DISCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Expiration Date" source="expirationDate" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Active" source="isActive" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="CouponRedemption"
          target="coupon_id"
          label="CouponRedemptions"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="App Users"
              source="appuser.id"
              reference="AppUser"
            >
              <TextField source={APPUSER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Coupons"
              source="coupon.id"
              reference="Coupon"
            >
              <TextField source={COUPON_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Redeemed" source="isRedeemed" />
            <TextField label="Redemption Date" source="redemptionDate" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OrderHistory"
          target="coupon_id"
          label="OrderHistories"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Addresses"
              source="address.id"
              reference="Address"
            >
              <TextField source={ADDRESS_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="App Users"
              source="appuser.id"
              reference="AppUser"
            >
              <TextField source={APPUSER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Coupons"
              source="coupon.id"
              reference="Coupon"
            >
              <TextField source={COUPON_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField
              label="Delivery Tips Amount"
              source="deliveryTipsAmount"
            />
            <TextField label="Discount Amount" source="discountAmount" />
            <TextField
              label="Estimated Delivery Time"
              source="estimatedDeliveryTime"
            />
            <TextField label="Final Amount" source="finalAmount" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Cancelled" source="isCancelled" />
            <BooleanField label="Is Fulfilled" source="isFulfilled" />
            <BooleanField label="Is Paid" source="isPaid" />
            <BooleanField label="Is Rejected" source="isRejected" />
            <DateField source="orderDateTime" label="Order Date Time" />
            <TextField label="Order Id Ref" source="orderIdRef" />
            <TextField label="Order Type" source="order_type" />
            <TextField label="Packaging Amount" source="packagingAmount" />
            <ReferenceField
              label="Payment Methods"
              source="paymentmethod.id"
              reference="PaymentMethod"
            >
              <TextField source={PAYMENTMETHOD_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="Preparation Instruction"
              source="preparationInstruction"
            />
            <TextField label="Preparation Time" source="preparationTime" />
            <TextField label="Rejected By" source="rejectedBy" />
            <ReferenceField
              label="Restaurants"
              source="restaurant.id"
              reference="Restaurant"
            >
              <TextField source={RESTAURANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Total Amount" source="totalAmount" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
