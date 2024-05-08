import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { ComplaintItemTitle } from "../complaintItem/ComplaintItemTitle";
import { OptionsVarientsItemTitle } from "../optionsVarientsItem/OptionsVarientsItemTitle";
import { OrderHistoryTitle } from "../orderHistory/OrderHistoryTitle";
import { OrderItemsAddonTitle } from "../orderItemsAddon/OrderItemsAddonTitle";
import { OrderItemsRatingTitle } from "../orderItemsRating/OrderItemsRatingTitle";

export const OrderItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="complaintItem"
          reference="ComplaintItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ComplaintItemTitle} />
        </ReferenceArrayInput>
        <TextInput
          label="Customization Options"
          source="customizationOptions"
        />
        <ReferenceInput
          source="optionsVarientsItem.id"
          reference="OptionsVarientsItem"
          label="Options Varients Item"
        >
          <SelectInput optionText={OptionsVarientsItemTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="orderHistory.id"
          reference="OrderHistory"
          label="Order History"
        >
          <SelectInput optionText={OrderHistoryTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="orderItemsAddons"
          reference="OrderItemsAddon"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderItemsAddonTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="orderItemsRatings"
          reference="OrderItemsRating"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderItemsRatingTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Quantity" source="quantity" />
      </SimpleForm>
    </Edit>
  );
};
