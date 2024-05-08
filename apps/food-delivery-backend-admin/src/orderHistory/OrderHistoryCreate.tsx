import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { AddressTitle } from "../address/AddressTitle";
import { AppUserTitle } from "../appUser/AppUserTitle";
import { CouponTitle } from "../coupon/CouponTitle";
import { FulfillmentBookTitle } from "../fulfillmentBook/FulfillmentBookTitle";
import { OrderItemTitle } from "../orderItem/OrderItemTitle";
import { OrdersHashtagsMapTitle } from "../ordersHashtagsMap/OrdersHashtagsMapTitle";
import { PaymentMethodTitle } from "../paymentMethod/PaymentMethodTitle";
import { PaymentsBookTitle } from "../paymentsBook/PaymentsBookTitle";
import { RatingTitle } from "../rating/RatingTitle";
import { RestaurantTitle } from "../restaurant/RestaurantTitle";
import { ReviewTitle } from "../review/ReviewTitle";
import { SettlementsBreakupTitle } from "../settlementsBreakup/SettlementsBreakupTitle";

export const OrderHistoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="addresses.id"
          reference="Address"
          label="Addresses"
        >
          <SelectInput optionText={AddressTitle} />
        </ReferenceInput>
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
        <NumberInput label="Delivery Tips Amount" source="deliveryTipsAmount" />
        <NumberInput label="Discount Amount" source="discountAmount" />
        <DateTimeInput
          label="Estimated Delivery Time"
          source="estimatedDeliveryTime"
        />
        <NumberInput label="Final Amount" source="finalAmount" />
        <ReferenceArrayInput
          source="fulfillmentBook"
          reference="FulfillmentBook"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FulfillmentBookTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="Is Cancelled" source="isCancelled" />
        <BooleanInput label="Is Fulfilled" source="isFulfilled" />
        <BooleanInput label="Is Paid" source="isPaid" />
        <BooleanInput label="Is Rejected" source="isRejected" />
        <NumberInput step={1} label="Order Id Ref" source="orderIdRef" />
        <ReferenceArrayInput
          source="orderItems"
          reference="OrderItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderItemTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="ordersHashtagsMap"
          reference="OrdersHashtagsMap"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrdersHashtagsMapTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="order_type"
          label="Order Type"
          choices={[
            { label: "Delivery", value: "Delivery" },
            { label: "TakeAway", value: "TakeAway" },
            { label: "DineIn", value: "DineIn" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="Packaging Amount" source="packagingAmount" />
        <ReferenceInput
          source="paymentMethods.id"
          reference="PaymentMethod"
          label="Payment Methods"
        >
          <SelectInput optionText={PaymentMethodTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="paymentsBook"
          reference="PaymentsBook"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentsBookTitle} />
        </ReferenceArrayInput>
        <TextInput
          label="Preparation Instruction"
          source="preparationInstruction"
        />
        <NumberInput
          step={1}
          label="Preparation Time"
          source="preparationTime"
        />
        <ReferenceArrayInput
          source="ratings"
          reference="Rating"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RatingTitle} />
        </ReferenceArrayInput>
        <TextInput label="Rejected By" source="rejectedBy" />
        <ReferenceInput
          source="restaurants.id"
          reference="Restaurant"
          label="Restaurants"
        >
          <SelectInput optionText={RestaurantTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="reviews"
          reference="Review"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReviewTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="settlementsBreakup"
          reference="SettlementsBreakup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SettlementsBreakupTitle} />
        </ReferenceArrayInput>
        <NumberInput label="Total Amount" source="totalAmount" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
