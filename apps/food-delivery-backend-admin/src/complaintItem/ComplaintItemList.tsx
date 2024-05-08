import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { COMPLAINTSBOOK_TITLE_FIELD } from "../complaintsBook/ComplaintsBookTitle";
import { ORDERITEM_TITLE_FIELD } from "../orderItem/OrderItemTitle";

export const ComplaintItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ComplaintItems"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
