import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PAYMENTSBOOK_TITLE_FIELD } from "./PaymentsBookTitle";
import { ORDERHISTORY_TITLE_FIELD } from "../orderHistory/OrderHistoryTitle";
import { PAYMENTMETHOD_TITLE_FIELD } from "../paymentMethod/PaymentMethodTitle";

export const PaymentsBookShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="ComplaintsBook"
          target="payments_book_id"
          label="ComplaintsBooks"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Issue Category" source="issue_category" />
            <TextField label="Issue Description" source="issueDescription" />
            <TextField label="Order Id" source="orderId" />
            <ReferenceField
              label="Payments Book"
              source="paymentsbook.id"
              reference="PaymentsBook"
            >
              <TextField source={PAYMENTSBOOK_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Refund Amount" source="refundAmount" />
            <TextField label="Refund Eligibility" source="refund_eligibility" />
            <TextField label="Refund Mode" source="refund_mode" />
            <TextField label="Refund Type" source="refund_type" />
            <DateField
              source="ticketCreationTime"
              label="Ticket Creation Time"
            />
            <TextField label="Ticket Id" source="ticketId" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
