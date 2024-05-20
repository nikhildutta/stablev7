import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";

export const TaxRateInformationList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TaxRateInformations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Cgst Rate" source="cgstRate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField
          label="Net Tax Transferrable"
          source="netTaxTransferrable"
        />
        <ReferenceField
          label="Restaurants"
          source="restaurant.id"
          reference="Restaurant"
        >
          <TextField source={RESTAURANT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Sgst Rate" source="sgstRate" />
        <TextField label="Updated At" source="updatedAt" />
      </Datagrid>
    </List>
  );
};
