import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { DeliveryInstructionAddressMapTitle } from "../deliveryInstructionAddressMap/DeliveryInstructionAddressMapTitle";

export const DeliveryPartnerInstructionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="Add Direction To Reach Audio Url"
          source="addDirectionToReachAudioUrl"
        />
        <TextInput
          label="Add Direction To Reach Instruction"
          source="addDirectionToReachInstruction"
        />
        <BooleanInput label="Avoid Calling Bool" source="avoidCallingBool" />
        <BooleanInput
          label="Avoid Ringing Bell Bool"
          source="avoidRingingBellBool"
        />
        <ReferenceArrayInput
          source="deliveryInstructionAddressMap"
          reference="DeliveryInstructionAddressMap"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DeliveryInstructionAddressMapTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="Leave At Door Bool" source="leaveAtDoorBool" />
        <BooleanInput
          label="Leave With Security Bool"
          source="leaveWithSecurityBool"
        />
        <BooleanInput label="Pet At Home" source="petAtHome" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
