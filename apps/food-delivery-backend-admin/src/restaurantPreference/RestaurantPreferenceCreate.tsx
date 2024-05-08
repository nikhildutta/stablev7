import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { RestaurantTitle } from "../restaurant/RestaurantTitle";

export const RestaurantPreferenceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Preference Type" source="preferenceType" />
        <TextInput label="Preference Value" source="preferenceValue" />
        <ReferenceInput
          source="restaurants.id"
          reference="Restaurant"
          label="Restaurants"
        >
          <SelectInput optionText={RestaurantTitle} />
        </ReferenceInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
