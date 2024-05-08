import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  DateField,
  BooleanField,
} from "react-admin";

import { COMBOGROUP_TITLE_FIELD } from "../comboGroup/ComboGroupTitle";
import { TIMEWINDOW_TITLE_FIELD } from "./TimeWindowTitle";
import { DISCOUNT_TITLE_FIELD } from "../discount/DiscountTitle";
import { MENUITEM_TITLE_FIELD } from "../menuItem/MenuItemTitle";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";

export const TimeWindowShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Window End" source="windowEnd" />
        <TextField label="Window Start" source="windowStart" />
        <ReferenceManyField
          reference="ComboItemWindowMap"
          target="time_window_id"
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
        <ReferenceManyField
          reference="DiscountWindowMap"
          target="time_window_id"
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
        <ReferenceManyField
          reference="MenuItemsWindowMap"
          target="time_window_id"
          label="MenuItemsWindowMaps"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is247" source="is247" />
            <ReferenceField
              label="Menu Items"
              source="menuitem.id"
              reference="MenuItem"
            >
              <TextField source={MENUITEM_TITLE_FIELD} />
            </ReferenceField>
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
        <ReferenceManyField
          reference="RestaurantTimeWindowMap"
          target="time_window_id"
          label="RestaurantTimeWindowMaps"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Day Of The Week" source="day_of_the_week" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Restaurants"
              source="restaurant.id"
              reference="Restaurant"
            >
              <TextField source={RESTAURANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Time Window"
              source="timewindow.id"
              reference="TimeWindow"
            >
              <TextField source={TIMEWINDOW_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
