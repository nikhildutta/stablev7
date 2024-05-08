import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { ADDRESS_TITLE_FIELD } from "../address/AddressTitle";
import { APPUSER_TITLE_FIELD } from "../appUser/AppUserTitle";
import { COUPON_TITLE_FIELD } from "../coupon/CouponTitle";
import { PAYMENTMETHOD_TITLE_FIELD } from "./PaymentMethodTitle";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";
import { ORDERHISTORY_TITLE_FIELD } from "../orderHistory/OrderHistoryTitle";

export const PaymentMethodShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Method Details" source="methodDetails" />
        <TextField label="Method Name" source="methodName" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="OrderHistory"
          target="payment_method_id"
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
        <ReferenceManyField
          reference="PaymentsBook"
          target="payment_method_id"
          label="PaymentsBooks"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Error Code" source="errorCode" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Order History"
              source="orderhistory.id"
              reference="OrderHistory"
            >
              <TextField source={ORDERHISTORY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Payment Amount" source="paymentAmount" />
            <TextField label="Payment Currency" source="paymentCurrency" />
            <TextField label="Payment Date" source="paymentDate" />
            <ReferenceField
              label="Payment Methods"
              source="paymentmethod.id"
              reference="PaymentMethod"
            >
              <TextField source={PAYMENTMETHOD_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="Payment Status" source="paymentStatus" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
