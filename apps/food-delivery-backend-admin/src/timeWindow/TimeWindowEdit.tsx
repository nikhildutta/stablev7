import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { ComboItemWindowMapTitle } from "../comboItemWindowMap/ComboItemWindowMapTitle";
import { DiscountWindowMapTitle } from "../discountWindowMap/DiscountWindowMapTitle";
import { MenuItemsWindowMapTitle } from "../menuItemsWindowMap/MenuItemsWindowMapTitle";
import { RestaurantTimeWindowMapTitle } from "../restaurantTimeWindowMap/RestaurantTimeWindowMapTitle";

export const TimeWindowEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="comboItemWindowMap"
          reference="ComboItemWindowMap"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ComboItemWindowMapTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="discountWindowMap"
          reference="DiscountWindowMap"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DiscountWindowMapTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="menuItemsWindowMap"
          reference="MenuItemsWindowMap"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MenuItemsWindowMapTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="restaurantTimeWindowMap"
          reference="RestaurantTimeWindowMap"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RestaurantTimeWindowMapTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Window End" source="windowEnd" />
        <DateTimeInput label="Window Start" source="windowStart" />
      </SimpleForm>
    </Edit>
  );
};
