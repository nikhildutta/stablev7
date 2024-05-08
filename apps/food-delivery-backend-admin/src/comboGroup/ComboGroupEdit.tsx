import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  BooleanInput,
  ReferenceInput,
  DateTimeInput,
} from "react-admin";

import { ComboItemTableTitle } from "../comboItemTable/ComboItemTableTitle";
import { ComboItemWindowMapTitle } from "../comboItemWindowMap/ComboItemWindowMapTitle";
import { RestaurantTitle } from "../restaurant/RestaurantTitle";

export const ComboGroupEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Combo Base Price" source="comboBasePrice" />
        <TextInput label="Combo Description" source="comboDescription" />
        <ReferenceArrayInput
          source="comboItemTable"
          reference="ComboItemTable"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ComboItemTableTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="comboItemWindowMap"
          reference="ComboItemWindowMap"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ComboItemWindowMapTitle} />
        </ReferenceArrayInput>
        <TextInput label="Combo Name" source="comboName" />
        <SelectInput
          source="combo_type"
          label="Combo Type"
          choices={[
            { label: "Default", value: "Default" },
            { label: "Customizable", value: "Customizable" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <BooleanInput label="Is Bank Coupon" source="isBankCoupon" />
        <BooleanInput label="Is Platform Coupon" source="isPlatformCoupon" />
        <BooleanInput
          label="Is Restuaruant Coupon"
          source="isRestuaruantCoupon"
        />
        <ReferenceInput
          source="restaurants.id"
          reference="Restaurant"
          label="Restaurants"
        >
          <SelectInput optionText={RestaurantTitle} />
        </ReferenceInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
