import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { COMBOGROUP_TITLE_FIELD } from "./ComboGroupTitle";
import { OPTIONSVARIENTSITEM_TITLE_FIELD } from "../optionsVarientsItem/OptionsVarientsItemTitle";
import { TIMEWINDOW_TITLE_FIELD } from "../timeWindow/TimeWindowTitle";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";

export const ComboGroupShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="ComboItemTable"
          target="combo_groups_id"
          label="ComboItemTables"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Combo Groups"
              source="combogroup.id"
              reference="ComboGroup"
            >
              <TextField source={COMBOGROUP_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Addon Allowed" source="isAddonAllowed" />
            <ReferenceField
              label="Options Varients Item"
              source="optionsvarientsitem.id"
              reference="OptionsVarientsItem"
            >
              <TextField source={OPTIONSVARIENTSITEM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ComboItemWindowMap"
          target="combo_groups_id"
          label="ComboItemWindowMaps"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Combo Groups"
              source="combogroup.id"
              reference="ComboGroup"
            >
              <TextField source={COMBOGROUP_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
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
