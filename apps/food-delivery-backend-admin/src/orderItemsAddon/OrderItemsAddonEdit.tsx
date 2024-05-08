import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { OptionsAddOnsItemTitle } from "../optionsAddOnsItem/OptionsAddOnsItemTitle";
import { OrderItemTitle } from "../orderItem/OrderItemTitle";

export const OrderItemsAddonEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="optionsAddOnsItem.id"
          reference="OptionsAddOnsItem"
          label="Options Add Ons Item"
        >
          <SelectInput optionText={OptionsAddOnsItemTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="orderItems.id"
          reference="OrderItem"
          label="Order Items"
        >
          <SelectInput optionText={OrderItemTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Quantity" source="quantity" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
