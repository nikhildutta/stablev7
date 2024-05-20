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

export const ComboGroupList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ComboGroups"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Combo Base Price" source="comboBasePrice" />
        <TextField label="Combo Description" source="comboDescription" />
        <TextField label="Combo Name" source="comboName" />
        <TextField label="Combo Type" source="combo_type" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Bank Coupon" source="isBankCoupon" />
        <BooleanField label="Is Platform Coupon" source="isPlatformCoupon" />
        <BooleanField
          label="Is Restuaruant Coupon"
          source="isRestuaruantCoupon"
        />
        <ReferenceField
          label="Restaurants"
          source="restaurant.id"
          reference="Restaurant"
        >
          <TextField source={RESTAURANT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Updated At" source="updatedAt" />
      </Datagrid>
    </List>
  );
};
