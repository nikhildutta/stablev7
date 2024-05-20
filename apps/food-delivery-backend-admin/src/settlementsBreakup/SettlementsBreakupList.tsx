import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { APPUSER_TITLE_FIELD } from "../appUser/AppUserTitle";
import { ORDERHISTORY_TITLE_FIELD } from "../orderHistory/OrderHistoryTitle";
import { PAYOUTCYCLE_TITLE_FIELD } from "../payoutCycle/PayoutCycleTitle";

export const SettlementsBreakupList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SettlementsBreakups"}
      perPage={50}
      pagination={<Pagination />}
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
        <TextField label="Cancellation Policy" source="cancellationPolicy" />
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
        <TextField label="Fulfilment Fee Per Km" source="fulfilmentFeePerKm" />
        <TextField label="Gst Paid By Platform" source="gstPaidByPlatform" />
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
        <TextField label="Payment Mechanism Fee" source="paymentMechanismFee" />
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
    </List>
  );
};
