import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";

export const MerchantInvoiceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
