import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { RestaurantTitle } from "../restaurant/RestaurantTitle";

export const MerchantInvoiceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput
          label="Invoice Generation Date"
          source="invoiceGenerationDate"
        />
        <DateTimeInput label="Invoice Sent Date" source="invoiceSentDate" />
        <SelectInput
          source="invoice_status"
          label="Invoice Status"
          choices={[
            { label: "Invoice_Generated", value: "Invoice_Generated" },
            { label: "Invoice_Sent", value: "Invoice_Sent" },
            { label: "Error_Found", value: "Error_Found" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="invoice_type"
          label="Invoice Type"
          choices={[
            { label: "Online_Order", value: "Online_Order" },
            { label: "Dine_In", value: "Dine_In" },
            { label: "Take_Away", value: "Take_Away" },
            { label: "Recovery", value: "Recovery" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="restaurants.id"
          reference="Restaurant"
          label="Restaurants"
        >
          <SelectInput optionText={RestaurantTitle} />
        </ReferenceInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
