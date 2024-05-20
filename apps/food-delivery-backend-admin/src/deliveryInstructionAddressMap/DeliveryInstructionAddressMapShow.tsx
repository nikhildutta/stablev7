import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { ADDRESS_TITLE_FIELD } from "../address/AddressTitle";
import { DELIVERYPARTNERINSTRUCTION_TITLE_FIELD } from "../deliveryPartnerInstruction/DeliveryPartnerInstructionTitle";

export const DeliveryInstructionAddressMapShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
