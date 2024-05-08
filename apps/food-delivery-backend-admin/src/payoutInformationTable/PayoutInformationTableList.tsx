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

export const PayoutInformationTableList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PayoutInformationTables"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Bank Account Number" source="bankAccountNumber" />
        <TextField label="Bank Ifsc Code" source="bankIfscCode" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="First Payout Date" source="firstPayoutDate" />
        <TextField label="ID" source="id" />
        <BooleanField
          label="Is Bank Account Verified"
          source="isBankAccountVerified"
        />
        <TextField label="Pan Number" source="panNumber" />
        <TextField label="Payout Cycle Length" source="payoutCycleLength" />
        <TextField label="Payout Date Offset" source="payoutDateOffset" />
        <ReferenceField
          label="Restaurants"
          source="restaurant.id"
          reference="Restaurant"
        >
          <TextField source={RESTAURANT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Tan Number" source="tanNumber" />
        <TextField label="Updated At" source="updatedAt" />
      </Datagrid>
    </List>
  );
};
