import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ORDERHISTORY_TITLE_FIELD } from "./OrderHistoryTitle";
import { OPTIONSVARIENTSITEM_TITLE_FIELD } from "../optionsVarientsItem/OptionsVarientsItemTitle";
import { HASHTAG_TITLE_FIELD } from "../hashtag/HashtagTitle";
import { PAYMENTMETHOD_TITLE_FIELD } from "../paymentMethod/PaymentMethodTitle";
import { APPUSER_TITLE_FIELD } from "../appUser/AppUserTitle";
import { PAYOUTCYCLE_TITLE_FIELD } from "../payoutCycle/PayoutCycleTitle";
import { ADDRESS_TITLE_FIELD } from "../address/AddressTitle";
import { COUPON_TITLE_FIELD } from "../coupon/CouponTitle";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";

export const OrderHistoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceField label="Coupons" source="coupon.id" reference="Coupon">
          <TextField source={COUPON_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Delivery Tips Amount" source="deliveryTipsAmount" />
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
        <ReferenceManyField
          reference="FulfillmentBook"
          target="order_id"
          label="FulfillmentBooks"
        >
          <Datagrid rowClick="show">
            <TextField label="Accepted Order By" source="acceptedOrderBy" />
            <BooleanField
              label="Accepted Order Status"
              source="acceptedOrderStatus"
            />
            <TextField
              label="Accepted Order Status At"
              source="acceptedOrderStatusAt"
            />
            <DateField source="createdAt" label="Created At" />
            <BooleanField
              label="Customer Fulfillment Status"
              source="customerFulfillmentStatus"
            />
            <TextField
              label="Customer Fulfillment Status At"
              source="customerFulfillmentStatusAt"
            />
            <TextField label="ID" source="id" />
            <TextField label="Marked Fulfilled By" source="markedFulfilledBy" />
            <ReferenceField
              label="Order History"
              source="orderhistory.id"
              reference="OrderHistory"
            >
              <TextField source={ORDERHISTORY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Partner Pickup At" source="partnerPickupAt" />
            <TextField label="Partner Pickup By" source="partnerPickupBy" />
            <BooleanField
              label="Partner Pickup Status"
              source="partnerPickupStatus"
            />
            <TextField label="Ready For Pickup By" source="readyForPickupBy" />
            <BooleanField
              label="Ready For Pickup Status"
              source="readyForPickupStatus"
            />
            <TextField
              label="Ready For Pickup Status At"
              source="readyForPickupStatusAt"
            />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OrderItem"
          target="order_id"
          label="OrderItems"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField
              label="Customization Options"
              source="customizationOptions"
            />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Options Varients Item"
              source="optionsvarientsitem.id"
              reference="OptionsVarientsItem"
            >
              <TextField source={OPTIONSVARIENTSITEM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Order History"
              source="orderhistory.id"
              reference="OrderHistory"
            >
              <TextField source={ORDERHISTORY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Quantity" source="quantity" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OrdersHashtagsMap"
          target="order_id"
          label="OrdersHashtagsMaps"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Hashtags"
              source="hashtag.id"
              reference="Hashtag"
            >
              <TextField source={HASHTAG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Order History"
              source="orderhistory.id"
              reference="OrderHistory"
            >
              <TextField source={ORDERHISTORY_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PaymentsBook"
          target="order_id"
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
        <ReferenceManyField
          reference="Rating"
          target="order_id"
          label="Ratings"
        >
          <Datagrid rowClick="show">
            <TextField label="Cleanliness" source="cleanliness" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Food Quality" source="foodQuality" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Order History"
              source="orderhistory.id"
              reference="OrderHistory"
            >
              <TextField source={ORDERHISTORY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Rating For Customer" source="ratingForCustomer" />
            <TextField label="Rating Of Delivery" source="ratingOfDelivery" />
            <TextField label="Rating Of Order" source="ratingOfOrder" />
            <TextField label="Service" source="service" />
            <TextField label="Updated At" source="updatedAt" />
            <TextField label="Value For Money" source="valueForMoney" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Review"
          target="order_id"
          label="Reviews"
        >
          <Datagrid rowClick="show">
            <TextField label="Body" source="body" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Order History"
              source="orderhistory.id"
              reference="OrderHistory"
            >
              <TextField source={ORDERHISTORY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Review Img" source="reviewImg" />
            <TextField label="Title" source="title" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SettlementsBreakup"
          target="order_id"
          label="SettlementsBreakups"
        >
          <Datagrid rowClick="show">
            <TextField
              label="Amount For Gst Under95"
              source="amountForGstUnder95"
            />
            <TextField label="Amount For Tcs" source="amountForTcs" />
            <ReferenceField
              label="App Users"
              source="appuser.id"
              reference="AppUser"
            >
              <TextField source={APPUSER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Bank Utr" source="bankUtr" />
            <TextField label="Base Service Fee" source="baseServiceFee" />
            <TextField
              label="Base Service Fee Percentage"
              source="baseServiceFeePercentage"
            />
            <TextField label="Businessname" source="businessname" />
            <TextField
              label="Cancellation Or Rejection Reason"
              source="cancellationOrRejectionReason"
            />
            <TextField
              label="Cancellation Or Rejection State"
              source="cancellationOrRejectionState"
            />
            <TextField
              label="Cancellation Policy"
              source="cancellationPolicy"
            />
            <TextField
              label="Cash Received Self Delivery"
              source="cashReceivedSelfDelivery"
            />
            <TextField
              label="Commissionable Amount"
              source="commissionableAmount"
            />
            <DateField source="createdAt" label="Created At" />
            <TextField
              label="Credit Debit Note Adjustment"
              source="creditDebitNoteAdjustment"
            />
            <TextField
              label="Customer Compensation"
              source="customerCompensation"
            />
            <TextField label="Customer Payable" source="customerPayable" />
            <TextField label="Delivery Charge" source="deliveryCharge" />
            <TextField
              label="Delivery Charges Recovery"
              source="deliveryChargesRecovery"
            />
            <TextField label="Delivery State Code" source="deliveryStateCode" />
            <TextField label="Discount Construct" source="discountConstruct" />
            <TextField label="Extra Inventory Ads" source="extraInventoryAds" />
            <TextField label="Fulfilment Fee" source="fulfilmentFee" />
            <TextField
              label="Fulfilment Fee Per Km"
              source="fulfilmentFeePerKm"
            />
            <TextField
              label="Gst Paid By Platform"
              source="gstPaidByPlatform"
            />
            <TextField
              label="Gst To Be Paid By Restaurant"
              source="gstToBePaidByRestaurant"
            />
            <TextField label="ID" source="id" />
            <TextField label="Net Additions" source="netAdditions" />
            <TextField label="Net Deductions" source="netDeductions" />
            <TextField label="Order Date Time" source="orderDateTime" />
            <TextField label="Order Distance Km" source="orderDistanceKm" />
            <ReferenceField
              label="Order History"
              source="orderhistory.id"
              reference="OrderHistory"
            >
              <TextField source={ORDERHISTORY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Order Level Payout" source="orderLevelPayout" />
            <TextField label="Order Status" source="orderStatus" />
            <TextField label="Order Type" source="orderType" />
            <TextField label="Packaging Charge" source="packagingCharge" />
            <TextField
              label="Payment Mechanism Fee"
              source="paymentMechanismFee"
            />
            <TextField label="Payment Mode" source="paymentMode" />
            <ReferenceField
              label="Payout Cycles"
              source="payoutcycle.id"
              reference="PayoutCycle"
            >
              <TextField source={PAYOUTCYCLE_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="Promo Recovery Adjustment"
              source="promoRecoveryAdjustment"
            />
            <TextField
              label="Restaurant Discount From Others"
              source="restaurantDiscountFromOthers"
            />
            <TextField
              label="Restaurant Discount From Promo"
              source="restaurantDiscountFromPromo"
            />
            <TextField label="Restaurant Id" source="restaurantId" />
            <TextField label="Settlement Date" source="settlementDate" />
            <TextField label="Settlement Status" source="settlementStatus" />
            <TextField label="Subtotal" source="subtotal" />
            <TextField
              label="Tax Collected At Source"
              source="taxCollectedAtSource"
            />
            <TextField
              label="Taxes On Service Payment Fees"
              source="taxesOnServicePaymentFees"
            />
            <TextField label="Tcs Igst Amount" source="tcsIgstAmount" />
            <TextField label="Tds194 O Amount" source="tds194OAmount" />
            <TextField
              label="Total Gst From Customers"
              source="totalGstFromCustomers"
            />
            <TextField label="Unsettled Amount" source="unsettledAmount" />
            <TextField label="Updated At" source="updatedAt" />
            <TextField label="Week No" source="weekNo" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
