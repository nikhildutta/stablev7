import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import { COMPLAINTSBOOK_TITLE_FIELD } from "../complaintsBook/ComplaintsBookTitle";
import { ORDERITEM_TITLE_FIELD } from "../orderItem/OrderItemTitle";

export const ComplaintItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
