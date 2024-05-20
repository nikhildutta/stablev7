import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { COMPLAINTSBOOK_TITLE_FIELD } from "./ComplaintsBookTitle";
import { ORDERITEM_TITLE_FIELD } from "../orderItem/OrderItemTitle";
import { PAYMENTSBOOK_TITLE_FIELD } from "../paymentsBook/PaymentsBookTitle";

export const ComplaintsBookShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <DateField source="ticketCreationTime" label="Ticket Creation Time" />
        <TextField label="Ticket Id" source="ticketId" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="ComplaintItem"
          target="complaint_id"
          label="ComplaintItems"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Complaints Book"
              source="complaintsbook.id"
              reference="ComplaintsBook"
            >
              <TextField source={COMPLAINTSBOOK_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Refund" source="isRefund" />
            <ReferenceField
              label="Order Items"
              source="orderitem.id"
              reference="OrderItem"
            >
              <TextField source={ORDERITEM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ComplaintsPhoto"
          target="complaint_id"
          label="ComplaintsPhotos"
        >
          <Datagrid rowClick="show">
            <TextField label="Complaint Image Url" source="complaintImageUrl" />
            <ReferenceField
              label="Complaints Book"
              source="complaintsbook.id"
              reference="ComplaintsBook"
            >
              <TextField source={COMPLAINTSBOOK_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
