import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { COMPLAINTSBOOK_TITLE_FIELD } from "../complaintsBook/ComplaintsBookTitle";
import { ORDERITEM_TITLE_FIELD } from "./OrderItemTitle";
import { OPTIONSADDONSITEM_TITLE_FIELD } from "../optionsAddOnsItem/OptionsAddOnsItemTitle";
import { RATING_TITLE_FIELD } from "../rating/RatingTitle";
import { OPTIONSVARIENTSITEM_TITLE_FIELD } from "../optionsVarientsItem/OptionsVarientsItemTitle";
import { ORDERHISTORY_TITLE_FIELD } from "../orderHistory/OrderHistoryTitle";

export const OrderItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField
          label="Customization Options"
          source="customizationOptions"
        />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Options Varients Item"
          source="optionsvarientsitem.id"
          reference="OptionsVarientsItem"
        >
          <TextField source={OPTIONSVARIENTSITEM_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Order History"
          source="orderhistory.id"
          reference="OrderHistory"
        >
          <TextField source={ORDERHISTORY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Quantity" source="quantity" />
        <ReferenceManyField
          reference="ComplaintItem"
          target="order_item_id"
          label="ComplaintItems"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Complaints Book"
              source="complaintsbook.id"
              reference="ComplaintsBook"
            >
              <TextField source={COMPLAINTSBOOK_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Refund" source="isRefund" />
            <ReferenceField
              label="Order Items"
              source="orderitem.id"
              reference="OrderItem"
            >
              <TextField source={ORDERITEM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OrderItemsAddon"
          target="order_item_id"
          label="OrderItemsAddons"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OrderItemsRating"
          target="order_item_id"
          label="OrderItemsRatings"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Order Item Rating" source="orderItemRating" />
            <ReferenceField
              label="Order Items"
              source="orderitem.id"
              reference="OrderItem"
            >
              <TextField source={ORDERITEM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Ratings"
              source="rating.id"
              reference="Rating"
            >
              <TextField source={RATING_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
