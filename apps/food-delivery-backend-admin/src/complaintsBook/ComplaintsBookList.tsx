import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PAYMENTSBOOK_TITLE_FIELD } from "../paymentsBook/PaymentsBookTitle";

export const ComplaintsBookList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ComplaintsBooks"}
      perPage={50}
      pagination={<Pagination />}
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
        <DateField source="ticketCreationTime" label="Ticket Creation Time" />
        <TextField label="Ticket Id" source="ticketId" />
        <TextField label="Updated At" source="updatedAt" />
      </Datagrid>
    </List>
  );
};
