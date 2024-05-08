import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { RestaurantTitle } from "../restaurant/RestaurantTitle";

export const TaxRateInformationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Cgst Rate" source="cgstRate" />
        <BooleanInput
          label="Net Tax Transferrable"
          source="netTaxTransferrable"
        />
        <ReferenceInput
          source="restaurants.id"
          reference="Restaurant"
          label="Restaurants"
        >
          <SelectInput optionText={RestaurantTitle} />
        </ReferenceInput>
        <NumberInput label="Sgst Rate" source="sgstRate" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
