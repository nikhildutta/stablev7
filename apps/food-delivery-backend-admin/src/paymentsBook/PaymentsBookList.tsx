import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { ORDERHISTORY_TITLE_FIELD } from "../orderHistory/OrderHistoryTitle";
import { PAYMENTMETHOD_TITLE_FIELD } from "../paymentMethod/PaymentMethodTitle";

export const PaymentsBookList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PaymentsBooks"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
