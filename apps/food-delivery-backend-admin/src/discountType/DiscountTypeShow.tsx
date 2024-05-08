import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { DISCOUNTTYPE_TITLE_FIELD } from "./DiscountTypeTitle";

export const DiscountTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Discount Type" source="discountType" />
        <TextField label="ID" source="id" />
        <ReferenceManyField
          reference="Discount"
          target="discount_type_id"
          label="Discounts"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Discount Type"
              source="discounttype.id"
              reference="DiscountType"
            >
              <TextField source={DISCOUNTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Expiration Date" source="expirationDate" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Active" source="isActive" />
            <TextField label="Max Discount" source="maxDiscount" />
            <TextField label="Minimum Order Value" source="minimumOrderValue" />
            <TextField label="Type Of Discount" source="typeOfDiscount" />
            <TextField label="Updated At" source="updatedAt" />
            <TextField label="Value" source="value" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
