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
import { RESTAURANT_TITLE_FIELD } from "./RestaurantTitle";
import { FAVOURITE_TITLE_FIELD } from "../favourite/FavouriteTitle";
import { ADDRESS_TITLE_FIELD } from "../address/AddressTitle";
import { APPUSER_TITLE_FIELD } from "../appUser/AppUserTitle";
import { COUPON_TITLE_FIELD } from "../coupon/CouponTitle";
import { PAYMENTMETHOD_TITLE_FIELD } from "../paymentMethod/PaymentMethodTitle";
import { PORTALUSER_TITLE_FIELD } from "../portalUser/PortalUserTitle";
import { HASHTAG_TITLE_FIELD } from "../hashtag/HashtagTitle";
import { TIMEWINDOW_TITLE_FIELD } from "../timeWindow/TimeWindowTitle";

export const RestaurantShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Average Cost" source="averageCost" />
        <TextField label="Closure Status" source="closure_status" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Active" source="isActive" />
        <BooleanField label="Is Delivery" source="isDelivery" />
        <BooleanField label="Is Dine In" source="isDineIn" />
        <BooleanField label="Is Hidden" source="isHidden" />
        <BooleanField label="Is Takeaway" source="isTakeaway" />
        <TextField label="Packaging Fee Type" source="packaging_fee_type" />
        <TextField label="Restaurant Icon Url" source="restaurantIconUrl" />
        <TextField label="Restaurant Id Ref" source="restaurantIdRef" />
        <TextField label="Share Slug" source="shareSlug" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="AccountRestaurantLookup"
          target="restaurant_id"
          label="AccountRestaurantLookups"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Accounts"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Restaurants"
              source="restaurant.id"
              reference="Restaurant"
            >
              <TextField source={RESTAURANT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ComboGroup"
          target="restaurant_id"
          label="ComboGroups"
        >
          <Datagrid rowClick="show">
            <TextField label="Combo Base Price" source="comboBasePrice" />
            <TextField label="Combo Description" source="comboDescription" />
            <TextField label="Combo Name" source="comboName" />
            <TextField label="Combo Type" source="combo_type" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Bank Coupon" source="isBankCoupon" />
            <BooleanField
              label="Is Platform Coupon"
              source="isPlatformCoupon"
            />
            <BooleanField
              label="Is Restuaruant Coupon"
              source="isRestuaruantCoupon"
            />
            <ReferenceField
              label="Restaurants"
              source="restaurant.id"
              reference="Restaurant"
            >
              <TextField source={RESTAURANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="FavouriteRestaurant"
          target="restaurant_id"
          label="FavouriteRestaurants"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Favourites"
              source="favourite.id"
              reference="Favourite"
            >
              <TextField source={FAVOURITE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Restaurants"
              source="restaurant.id"
              reference="Restaurant"
            >
              <TextField source={RESTAURANT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MenuCategory"
          target="restaurant_id"
          label="MenuCategories"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Active" source="isActive" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="Restaurants"
              source="restaurant.id"
              reference="Restaurant"
            >
              <TextField source={RESTAURANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MerchantInvoice"
          target="restaurant_id"
          label="MerchantInvoices"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField
              label="Invoice Generation Date"
              source="invoiceGenerationDate"
            />
            <TextField label="Invoice Sent Date" source="invoiceSentDate" />
            <TextField label="Invoice Status" source="invoice_status" />
            <TextField label="Invoice Type" source="invoice_type" />
            <ReferenceField
              label="Restaurants"
              source="restaurant.id"
              reference="Restaurant"
            >
              <TextField source={RESTAURANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OrderHistory"
          target="restaurant_id"
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
          reference="OrderPackagingFee"
          target="restaurant_id"
          label="OrderPackagingFees"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Packing Fee" source="packingFee" />
            <ReferenceField
              label="Restaurants"
              source="restaurant.id"
              reference="Restaurant"
            >
              <TextField source={RESTAURANT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PayoutCycle"
          target="restaurant_id"
          label="PayoutCycles"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Net Payout" source="netPayout" />
            <TextField label="Number Of Orders" source="numberOfOrders" />
            <TextField label="Payout Status" source="payout_status" />
            <ReferenceField
              label="Restaurants"
              source="restaurant.id"
              reference="Restaurant"
            >
              <TextField source={RESTAURANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Time Period End" source="timePeriodEnd" />
            <TextField label="Time Period Start" source="timePeriodStart" />
            <TextField label="Updated At" source="updatedAt" />
            <TextField label="Utr Number" source="utrNumber" />
            <TextField label="Week Number" source="weekNumber" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PayoutInformationTable"
          target="restaurant_id"
          label="PayoutInformationTables"
        >
          <Datagrid rowClick="show">
            <TextField label="Bank Account Number" source="bankAccountNumber" />
            <TextField label="Bank Ifsc Code" source="bankIfscCode" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="First Payout Date" source="firstPayoutDate" />
            <TextField label="ID" source="id" />
            <BooleanField
              label="Is Bank Account Verified"
              source="isBankAccountVerified"
            />
            <TextField label="Pan Number" source="panNumber" />
            <TextField label="Payout Cycle Length" source="payoutCycleLength" />
            <TextField label="Payout Date Offset" source="payoutDateOffset" />
            <ReferenceField
              label="Restaurants"
              source="restaurant.id"
              reference="Restaurant"
            >
              <TextField source={RESTAURANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Tan Number" source="tanNumber" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PortalUsersRelationsLookup"
          target="restaurant_id"
          label="PortalUsersRelationsLookups"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Portal Users"
              source="portaluser.id"
              reference="PortalUser"
            >
              <TextField source={PORTALUSER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Restaurants"
              source="restaurant.id"
              reference="Restaurant"
            >
              <TextField source={RESTAURANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="User Role" source="user_role" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Reservation"
          target="restaurant_id"
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
        <ReferenceManyField
          reference="RestaurantDetail"
          target="restaurant_id"
          label="RestaurantDetails"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Delivery Charge" source="deliveryCharge" />
            <TextField label="Delivery Time" source="deliveryTime" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="Image Url" source="imageUrl" />
            <TextField label="Min Order Value" source="minOrderValue" />
            <TextField label="Rating" source="rating" />
            <ReferenceField
              label="Restaurants"
              source="restaurant.id"
              reference="Restaurant"
            >
              <TextField source={RESTAURANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Review Count" source="reviewCount" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="RestaurantPreference"
          target="restaurant_id"
          label="RestaurantPreferences"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Preference Type" source="preferenceType" />
            <TextField label="Preference Value" source="preferenceValue" />
            <ReferenceField
              label="Restaurants"
              source="restaurant.id"
              reference="Restaurant"
            >
              <TextField source={RESTAURANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="RestaurantsHashtagsMap"
          target="restaurant_id"
          label="RestaurantsHashtagsMaps"
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
              label="Restaurants"
              source="restaurant.id"
              reference="Restaurant"
            >
              <TextField source={RESTAURANT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="RestaurantTimeWindowMap"
          target="restaurant_id"
          label="RestaurantTimeWindowMaps"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Day Of The Week" source="day_of_the_week" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Restaurants"
              source="restaurant.id"
              reference="Restaurant"
            >
              <TextField source={RESTAURANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Time Window"
              source="timewindow.id"
              reference="TimeWindow"
            >
              <TextField source={TIMEWINDOW_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TaxRateInformation"
          target="restaurant_id"
          label="TaxRateInformations"
        >
          <Datagrid rowClick="show">
            <TextField label="Cgst Rate" source="cgstRate" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField
              label="Net Tax Transferrable"
              source="netTaxTransferrable"
            />
            <ReferenceField
              label="Restaurants"
              source="restaurant.id"
              reference="Restaurant"
            >
              <TextField source={RESTAURANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Sgst Rate" source="sgstRate" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
