import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { DISCOUNTTYPE_TITLE_FIELD } from "../discountType/DiscountTypeTitle";

export const DiscountList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Discounts"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
