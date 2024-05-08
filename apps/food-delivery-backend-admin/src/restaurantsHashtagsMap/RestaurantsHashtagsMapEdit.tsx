import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { HashtagTitle } from "../hashtag/HashtagTitle";
import { RestaurantTitle } from "../restaurant/RestaurantTitle";

export const RestaurantsHashtagsMapEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="hashtags.id"
          reference="Hashtag"
          label="Hashtags"
        >
          <SelectInput optionText={HashtagTitle} />
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
