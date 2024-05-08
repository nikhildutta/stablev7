import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { OPTIONSADDONSITEM_TITLE_FIELD } from "../optionsAddOnsItem/OptionsAddOnsItemTitle";
import { ORDERITEM_TITLE_FIELD } from "../orderItem/OrderItemTitle";

export const OrderItemsAddonShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Options Add Ons Item"
          source="optionsaddonsitem.id"
          reference="OptionsAddOnsItem"
        >
          <TextField source={OPTIONSADDONSITEM_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Order Items"
          source="orderitem.id"
          reference="OrderItem"
        >
          <TextField source={ORDERITEM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Quantity" source="quantity" />
        <TextField label="Updated At" source="updatedAt" />
      </SimpleShowLayout>
    </Show>
  );
};
