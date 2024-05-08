import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FavouriteTitle } from "../favourite/FavouriteTitle";
import { RestaurantTitle } from "../restaurant/RestaurantTitle";

export const FavouriteRestaurantEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
