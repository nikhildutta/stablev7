import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DISCOUNT_TITLE_FIELD } from "./DiscountTitle";
import { MENUITEM_TITLE_FIELD } from "../menuItem/MenuItemTitle";
import { TIMEWINDOW_TITLE_FIELD } from "../timeWindow/TimeWindowTitle";
import { DISCOUNTTYPE_TITLE_FIELD } from "../discountType/DiscountTypeTitle";

export const DiscountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Coupon"
          target="discount_id"
          label="Coupons"
        >
          <Datagrid rowClick="show">
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Discount"
              source="discount.id"
              reference="Discount"
            >
              <TextField source={DISCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Expiration Date" source="expirationDate" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Active" source="isActive" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="DiscountMenuItem"
          target="discount_id"
          label="DiscountMenuItems"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Discount"
              source="discount.id"
              reference="Discount"
            >
              <TextField source={DISCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Menu Items"
              source="menuitem.id"
              reference="MenuItem"
            >
              <TextField source={MENUITEM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="DiscountWindowMap"
          target="discount_id"
          label="DiscountWindowMaps"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Discount"
              source="discount.id"
              reference="Discount"
            >
              <TextField source={DISCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <BooleanField label="Is247" source="is247" />
            <ReferenceField
              label="Time Window"
              source="timewindow.id"
              reference="TimeWindow"
            >
              <TextField source={TIMEWINDOW_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Time Window Day" source="time_window_day" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
