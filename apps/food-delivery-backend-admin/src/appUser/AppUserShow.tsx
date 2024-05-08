import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { APPUSER_TITLE_FIELD } from "./AppUserTitle";
import { COUPON_TITLE_FIELD } from "../coupon/CouponTitle";
import { SUBSCRIPTIONPLAN_TITLE_FIELD } from "../subscriptionPlan/SubscriptionPlanTitle";
import { SUBSCRIPTION_TITLE_FIELD } from "../subscription/SubscriptionTitle";
import { ADDRESS_TITLE_FIELD } from "../address/AddressTitle";
import { PAYMENTMETHOD_TITLE_FIELD } from "../paymentMethod/PaymentMethodTitle";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";
import { ORDERHISTORY_TITLE_FIELD } from "../orderHistory/OrderHistoryTitle";
import { PAYOUTCYCLE_TITLE_FIELD } from "../payoutCycle/PayoutCycleTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { HASHTAG_TITLE_FIELD } from "../hashtag/HashtagTitle";

export const AppUserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Account Status" source="account_status" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Profile Pic Url" source="profilePicUrl" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="AccessLog"
          target="user_id"
          label="AccessLogs"
        >
          <Datagrid rowClick="show">
            <TextField label="Action" source="action" />
            <ReferenceField
              label="App Users"
              source="appuser.id"
              reference="AppUser"
            >
              <TextField source={APPUSER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Device Info" source="deviceInfo" />
            <TextField label="Error Message" source="errorMessage" />
            <TextField label="ID" source="id" />
            <TextField label="Ip Address" source="ipAddress" />
            <TextField label="Response Status" source="responseStatus" />
            <TextField label="Timestamp" source="timestamp" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CouponRedemption"
          target="user_id"
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
          reference="CustomerPreference"
          target="user_id"
          label="CustomerPreferences"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="App Users"
              source="appuser.id"
              reference="AppUser"
            >
              <TextField source={APPUSER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Preference Type" source="preferenceType" />
            <TextField label="Preference Value" source="preferenceValue" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CustomerSubscription"
          target="user_id"
          label="CustomerSubscriptions"
        >
          <Datagrid rowClick="show">
            <TextField label="Activation Date" source="activationDate" />
            <ReferenceField
              label="App Users"
              source="appuser.id"
              reference="AppUser"
            >
              <TextField source={APPUSER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Expiration Date" source="expirationDate" />
            <TextField label="ID" source="id" />
            <TextField label="Renewal Count" source="renewalCount" />
            <ReferenceField
              label="Subscription Plans"
              source="subscriptionplan.id"
              reference="SubscriptionPlan"
            >
              <TextField source={SUBSCRIPTIONPLAN_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Subscriptions"
              source="subscription.id"
              reference="Subscription"
            >
              <TextField source={SUBSCRIPTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ErrorLog"
          target="user_id"
          label="ErrorLogs"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="App Users"
              source="appuser.id"
              reference="AppUser"
            >
              <TextField source={APPUSER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Error Code" source="errorCode" />
            <TextField label="Error Message" source="errorMessage" />
            <TextField label="ID" source="id" />
            <TextField label="Request Info" source="requestInfo" />
            <TextField label="Stack Trace" source="stackTrace" />
            <TextField label="Timestamp" source="timestamp" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Favourite"
          target="user_id"
          label="Favourites"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="App Users"
              source="appuser.id"
              reference="AppUser"
            >
              <TextField source={APPUSER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Notification"
          target="user_id"
          label="Notifications"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="App Users"
              source="appuser.id"
              reference="AppUser"
            >
              <TextField source={APPUSER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Read" source="isRead" />
            <TextField label="Message" source="message" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="NotificationSetting"
          target="user_id"
          label="NotificationSettings"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="App Users"
              source="appuser.id"
              reference="AppUser"
            >
              <TextField source={APPUSER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Setting Name" source="settingName" />
            <BooleanField label="Setting Value" source="settingValue" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OrderHistory"
          target="user_id"
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
        <ReferenceManyField reference="Report" target="user_id" label="Reports">
          <Datagrid rowClick="show">
            <ReferenceField
              label="App Users"
              source="appuser.id"
              reference="AppUser"
            >
              <TextField source={APPUSER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Report Data" source="reportData" />
            <TextField label="Report Type" source="reportType" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Reservation"
          target="user_id"
          label="Reservations"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="App Users"
              source="appuser.id"
              reference="AppUser"
            >
              <TextField source={APPUSER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Party Size" source="partySize" />
            <TextField label="Reservation Date" source="reservationDate" />
            <TextField label="Reservation Time" source="reservationTime" />
            <ReferenceField
              label="Restaurants"
              source="restaurant.id"
              reference="Restaurant"
            >
              <TextField source={RESTAURANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Reward" target="user_id" label="Rewards">
          <Datagrid rowClick="show">
            <ReferenceField
              label="App Users"
              source="appuser.id"
              reference="AppUser"
            >
              <TextField source={APPUSER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Expiration Date" source="expirationDate" />
            <TextField label="ID" source="id" />
            <TextField label="Points" source="points" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SettlementsBreakup"
          target="user_id"
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
        <ReferenceManyField
          reference="SsoLookup"
          target="user_id"
          label="SsoLookups"
        >
          <Datagrid rowClick="show">
            <TextField label="Apple Email" source="appleEmail" />
            <TextField label="Apple Family Name" source="appleFamilyName" />
            <TextField label="Apple Given Name" source="appleGivenName" />
            <TextField label="Apple Refresh Token" source="appleRefreshToken" />
            <TextField
              label="Apple Token Expires At"
              source="appleTokenExpiresAt"
            />
            <TextField label="Apple User Id" source="appleUserId" />
            <ReferenceField
              label="App Users"
              source="appuser.id"
              reference="AppUser"
            >
              <TextField source={APPUSER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField
              label="Facebook Access Token"
              source="facebookAccessToken"
            />
            <TextField label="Facebook Email" source="facebookEmail" />
            <TextField label="Facebook Name" source="facebookName" />
            <TextField
              label="Facebook Token Expires At"
              source="facebookTokenExpiresAt"
            />
            <TextField label="Facebook User Id" source="facebookUserId" />
            <TextField label="Google Email" source="googleEmail" />
            <TextField label="Google Family Name" source="googleFamilyName" />
            <TextField label="Google Given Name" source="googleGivenName" />
            <TextField
              label="Google Refresh Token"
              source="googleRefreshToken"
            />
            <TextField
              label="Google Token Expires At"
              source="googleTokenExpiresAt"
            />
            <TextField label="Google User Id" source="googleUserId" />
            <TextField label="ID" source="id" />
            <TextField
              label="Twitter Access Token"
              source="twitterAccessToken"
            />
            <TextField label="Twitter Handle" source="twitterHandle" />
            <TextField
              label="Twitter Token Secret"
              source="twitterTokenSecret"
            />
            <TextField label="Twitter User Id" source="twitterUserId" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Subscription"
          target="user_id"
          label="Subscriptions"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="App Users"
              source="appuser.id"
              reference="AppUser"
            >
              <TextField source={APPUSER_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="Auto Renew" source="autoRenew" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="End Date" source="endDate" />
            <TextField label="ID" source="id" />
            <TextField label="Payment Status" source="paymentStatus" />
            <TextField label="Start Date" source="startDate" />
            <TextField label="Status" source="status" />
            <ReferenceField
              label="Subscription Plans"
              source="subscriptionplan.id"
              reference="SubscriptionPlan"
            >
              <TextField source={SUBSCRIPTIONPLAN_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserCustomerLookup"
          target="user_id"
          label="UserCustomerLookups"
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
          reference="UserFeedback"
          target="user_id"
          label="UserFeedbacks"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="App Users"
              source="appuser.id"
              reference="AppUser"
            >
              <TextField source={APPUSER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Feedback Text" source="feedbackText" />
            <TextField label="ID" source="id" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UsersHashtagsMap"
          target="user_id"
          label="UsersHashtagsMaps"
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
              label="Hashtags"
              source="hashtag.id"
              reference="Hashtag"
            >
              <TextField source={HASHTAG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
