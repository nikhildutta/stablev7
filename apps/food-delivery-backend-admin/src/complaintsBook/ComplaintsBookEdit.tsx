import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  TextInput,
  ReferenceInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { ComplaintItemTitle } from "../complaintItem/ComplaintItemTitle";
import { ComplaintsPhotoTitle } from "../complaintsPhoto/ComplaintsPhotoTitle";
import { PaymentsBookTitle } from "../paymentsBook/PaymentsBookTitle";

export const ComplaintsBookEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="complaintItem"
          reference="ComplaintItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ComplaintItemTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="complaintsPhotos"
          reference="ComplaintsPhoto"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ComplaintsPhotoTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="issue_category"
          label="Issue Category"
          choices={[
            { label: "Order_Cancellation", value: "Order_Cancellation" },
            { label: "Missing_Items", value: "Missing_Items" },
            { label: "Inadequate_Quantity", value: "Inadequate_Quantity" },
            { label: "Food_Quality", value: "Food_Quality" },
            { label: "Packaging_Issues", value: "Packaging_Issues" },
            { label: "Delivery_Issues", value: "Delivery_Issues" },
            { label: "Payment_Issues", value: "Payment_Issues" },
            { label: "Other_Issues", value: "Other_Issues" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Issue Description" source="issueDescription" />
        <TextInput label="Order Id" source="orderId" />
        <ReferenceInput
          source="paymentsBook.id"
          reference="PaymentsBook"
          label="Payments Book"
        >
          <SelectInput optionText={PaymentsBookTitle} />
        </ReferenceInput>
        <NumberInput label="Refund Amount" source="refundAmount" />
        <SelectInput
          source="refund_eligibility"
          label="Refund Eligibility"
          choices={[
            { label: "No_Refund", value: "No_Refund" },
            { label: "Customer_Refund", value: "Customer_Refund" },
            { label: "Merchant_Refund", value: "Merchant_Refund" },
            { label: "Both", value: "Both" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="refund_mode"
          label="Refund Mode"
          choices={[
            { label: "Wallet", value: "Wallet" },
            {
              label: "Original_Payment_Method",
              value: "Original_Payment_Method",
            },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="refund_type"
          label="Refund Type"
          choices={[
            { label: "Full", value: "Full" },
            { label: "Partial", value: "Partial" },
            { label: "Custom", value: "Custom" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput step={1} label="Ticket Id" source="ticketId" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
