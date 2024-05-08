import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FavouriteTitle } from "../favourite/FavouriteTitle";
import { RestaurantTitle } from "../restaurant/RestaurantTitle";

export const FavouriteRestaurantCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="favourites.id"
          reference="Favourite"
          label="Favourites"
        >
          <SelectInput optionText={FavouriteTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="restaurants.id"
          reference="Restaurant"
          label="Restaurants"
        >
          <SelectInput optionText={RestaurantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
