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
import { OPTIONSVARIENTSITEM_TITLE_FIELD } from "../optionsVarientsItem/OptionsVarientsItemTitle";
import { ORDERHISTORY_TITLE_FIELD } from "../orderHistory/OrderHistoryTitle";

export const OrderItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"OrderItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
