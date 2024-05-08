import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { OPTIONSADDONSITEM_TITLE_FIELD } from "../optionsAddOnsItem/OptionsAddOnsItemTitle";
import { ORDERITEM_TITLE_FIELD } from "../orderItem/OrderItemTitle";

export const OrderItemsAddonList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"OrderItemsAddons"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
