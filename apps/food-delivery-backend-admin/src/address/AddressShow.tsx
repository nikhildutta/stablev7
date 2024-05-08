import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { ADDRESS_TITLE_FIELD } from "./AddressTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { DELIVERYPARTNERINSTRUCTION_TITLE_FIELD } from "../deliveryPartnerInstruction/DeliveryPartnerInstructionTitle";
import { APPUSER_TITLE_FIELD } from "../appUser/AppUserTitle";
import { COUPON_TITLE_FIELD } from "../coupon/CouponTitle";
import { PAYMENTMETHOD_TITLE_FIELD } from "../paymentMethod/PaymentMethodTitle";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";

export const AddressShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address Line1" source="addressLine1" />
        <TextField label="Address Line2" source="addressLine2" />
        <TextField label="Address Line3" source="addressLine3" />
        <TextField label="City" source="city" />
        <TextField label="Country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Primary" source="isPrimary" />
        <TextField label="Nick Name" source="nickName" />
        <TextField label="Pincode" source="pincode" />
        <TextField label="State" source="state" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="AccountsAddressMap"
          target="address_id"
          label="AccountsAddressMaps"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Accounts"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Addresses"
              source="address.id"
              reference="Address"
            >
              <TextField source={ADDRESS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ContactDetail"
          target="address_id"
          label="ContactDetails"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Addresses"
              source="address.id"
              reference="Address"
            >
              <TextField source={ADDRESS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Contact Name" source="contactName" />
            <TextField label="Contact Number" source="contactNumber" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CustomerAddressMap"
          target="address_id"
          label="CustomerAddressMaps"
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
              label="Customers"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="DeliveryInstructionAddressMap"
          target="address_id"
          label="DeliveryInstructionAddressMaps"
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
              label="Delivery Partner Instruction"
              source="deliverypartnerinstruction.id"
              reference="DeliveryPartnerInstruction"
            >
              <TextField source={DELIVERYPARTNERINSTRUCTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="GeoLocation"
          target="address_id"
          label="GeoLocations"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Addresses"
              source="address.id"
              reference="Address"
            >
              <TextField source={ADDRESS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Geo Fence" source="isGeoFence" />
            <TextField label="Latitude" source="latitude" />
            <TextField label="Longitude" source="longitude" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OrderHistory"
          target="delivery_address_id"
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
