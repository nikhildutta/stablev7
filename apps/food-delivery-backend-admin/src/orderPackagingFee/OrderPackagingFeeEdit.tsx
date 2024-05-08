import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RestaurantTitle } from "../restaurant/RestaurantTitle";

export const OrderPackagingFeeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Packing Fee" source="packingFee" />
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
