import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";
import { TIMEWINDOW_TITLE_FIELD } from "../timeWindow/TimeWindowTitle";

export const RestaurantTimeWindowMapShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
