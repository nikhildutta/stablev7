import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ADDRESS_TITLE_FIELD } from "../address/AddressTitle";
import { DELIVERYPARTNERINSTRUCTION_TITLE_FIELD } from "../deliveryPartnerInstruction/DeliveryPartnerInstructionTitle";

export const DeliveryInstructionAddressMapList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DeliveryInstructionAddressMaps"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="Addresses"
          source="address.id"
          reference="Address"
        >
          <TextField source={ADDRESS_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Delivery Partner Instruction"
          source="deliverypartnerinstruction.id"
          reference="DeliveryPartnerInstruction"
        >
          <TextField source={DELIVERYPARTNERINSTRUCTION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
      </Datagrid>
    </List>
  );
};
