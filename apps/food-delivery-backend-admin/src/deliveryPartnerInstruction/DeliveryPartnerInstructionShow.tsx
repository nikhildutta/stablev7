import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ADDRESS_TITLE_FIELD } from "../address/AddressTitle";
import { DELIVERYPARTNERINSTRUCTION_TITLE_FIELD } from "./DeliveryPartnerInstructionTitle";

export const DeliveryPartnerInstructionShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="Add Direction To Reach Audio Url"
          source="addDirectionToReachAudioUrl"
        />
        <TextField
          label="Add Direction To Reach Instruction"
          source="addDirectionToReachInstruction"
        />
        <BooleanField label="Avoid Calling Bool" source="avoidCallingBool" />
        <BooleanField
          label="Avoid Ringing Bell Bool"
          source="avoidRingingBellBool"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="Leave At Door Bool" source="leaveAtDoorBool" />
        <BooleanField
          label="Leave With Security Bool"
          source="leaveWithSecurityBool"
        />
        <BooleanField label="Pet At Home" source="petAtHome" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="DeliveryInstructionAddressMap"
          target="delivery_instruction_id"
          label="DeliveryInstructionAddressMaps"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
