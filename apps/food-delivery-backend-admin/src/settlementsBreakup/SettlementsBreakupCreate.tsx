import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { AppUserTitle } from "../appUser/AppUserTitle";
import { OrderHistoryTitle } from "../orderHistory/OrderHistoryTitle";
import { PayoutCycleTitle } from "../payoutCycle/PayoutCycleTitle";

export const SettlementsBreakupCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          label="Amount For Gst Under95"
          source="amountForGstUnder95"
        />
        <NumberInput label="Amount For Tcs" source="amountForTcs" />
        <ReferenceInput
          source="appUsers.id"
          reference="AppUser"
          label="App Users"
        >
          <SelectInput optionText={AppUserTitle} />
        </ReferenceInput>
        <TextInput label="Bank Utr" source="bankUtr" />
        <NumberInput label="Base Service Fee" source="baseServiceFee" />
        <NumberInput
          label="Base Service Fee Percentage"
          source="baseServiceFeePercentage"
        />
        <TextInput label="Businessname" source="businessname" />
        <TextInput
          label="Cancellation Or Rejection Reason"
          source="cancellationOrRejectionReason"
        />
        <TextInput
          label="Cancellation Or Rejection State"
          source="cancellationOrRejectionState"
        />
        <TextInput label="Cancellation Policy" source="cancellationPolicy" />
        <NumberInput
          label="Cash Received Self Delivery"
          source="cashReceivedSelfDelivery"
        />
        <NumberInput
          label="Commissionable Amount"
          source="commissionableAmount"
        />
        <NumberInput
          label="Credit Debit Note Adjustment"
          source="creditDebitNoteAdjustment"
        />
        <NumberInput
          label="Customer Compensation"
          source="customerCompensation"
        />
        <NumberInput label="Customer Payable" source="customerPayable" />
        <NumberInput label="Delivery Charge" source="deliveryCharge" />
        <NumberInput
          label="Delivery Charges Recovery"
          source="deliveryChargesRecovery"
        />
        <TextInput label="Delivery State Code" source="deliveryStateCode" />
        <TextInput label="Discount Construct" source="discountConstruct" />
        <NumberInput label="Extra Inventory Ads" source="extraInventoryAds" />
        <NumberInput label="Fulfilment Fee" source="fulfilmentFee" />
        <NumberInput
          label="Fulfilment Fee Per Km"
          source="fulfilmentFeePerKm"
        />
        <NumberInput label="Gst Paid By Platform" source="gstPaidByPlatform" />
        <NumberInput
          label="Gst To Be Paid By Restaurant"
          source="gstToBePaidByRestaurant"
        />
        <NumberInput label="Net Additions" source="netAdditions" />
        <NumberInput label="Net Deductions" source="netDeductions" />
        <DateTimeInput label="Order Date Time" source="orderDateTime" />
        <NumberInput label="Order Distance Km" source="orderDistanceKm" />
        <ReferenceInput
          source="orderHistory.id"
          reference="OrderHistory"
          label="Order History"
        >
          <SelectInput optionText={OrderHistoryTitle} />
        </ReferenceInput>
        <NumberInput label="Order Level Payout" source="orderLevelPayout" />
        <TextInput label="Order Status" source="orderStatus" />
        <TextInput label="Order Type" source="orderType" />
        <NumberInput label="Packaging Charge" source="packagingCharge" />
        <NumberInput
          label="Payment Mechanism Fee"
          source="paymentMechanismFee"
        />
        <TextInput label="Payment Mode" source="paymentMode" />
        <ReferenceInput
          source="payoutCycles.id"
          reference="PayoutCycle"
          label="Payout Cycles"
        >
          <SelectInput optionText={PayoutCycleTitle} />
        </ReferenceInput>
        <NumberInput
          label="Promo Recovery Adjustment"
          source="promoRecoveryAdjustment"
        />
        <NumberInput
          label="Restaurant Discount From Others"
          source="restaurantDiscountFromOthers"
        />
        <NumberInput
          label="Restaurant Discount From Promo"
          source="restaurantDiscountFromPromo"
        />
        <TextInput label="Restaurant Id" source="restaurantId" />
        <DateTimeInput label="Settlement Date" source="settlementDate" />
        <TextInput label="Settlement Status" source="settlementStatus" />
        <NumberInput label="Subtotal" source="subtotal" />
        <NumberInput
          label="Tax Collected At Source"
          source="taxCollectedAtSource"
        />
        <NumberInput
          label="Taxes On Service Payment Fees"
          source="taxesOnServicePaymentFees"
        />
        <NumberInput label="Tcs Igst Amount" source="tcsIgstAmount" />
        <NumberInput label="Tds194 O Amount" source="tds194OAmount" />
        <NumberInput
          label="Total Gst From Customers"
          source="totalGstFromCustomers"
        />
        <NumberInput label="Unsettled Amount" source="unsettledAmount" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <NumberInput step={1} label="Week No" source="weekNo" />
      </SimpleForm>
    </Create>
  );
};
