import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AddressTitle } from "../address/AddressTitle";
import { DeliveryPartnerInstructionTitle } from "../deliveryPartnerInstruction/DeliveryPartnerInstructionTitle";

export const DeliveryInstructionAddressMapCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="addresses.id"
          reference="Address"
          label="Addresses"
        >
          <SelectInput optionText={AddressTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="deliveryPartnerInstruction.id"
          reference="DeliveryPartnerInstruction"
          label="Delivery Partner Instruction"
        >
          <SelectInput optionText={DeliveryPartnerInstructionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
