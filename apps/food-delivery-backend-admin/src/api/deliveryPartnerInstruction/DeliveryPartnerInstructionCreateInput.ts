import { DeliveryInstructionAddressMapCreateNestedManyWithoutDeliveryPartnerInstructionsInput } from "./DeliveryInstructionAddressMapCreateNestedManyWithoutDeliveryPartnerInstructionsInput";

export type DeliveryPartnerInstructionCreateInput = {
  addDirectionToReachAudioUrl?: string | null;
  addDirectionToReachInstruction?: string | null;
  avoidCallingBool?: boolean | null;
  avoidRingingBellBool?: boolean | null;
  deliveryInstructionAddressMap?: DeliveryInstructionAddressMapCreateNestedManyWithoutDeliveryPartnerInstructionsInput;
  leaveAtDoorBool?: boolean | null;
  leaveWithSecurityBool?: boolean | null;
  petAtHome?: boolean | null;
  updatedAt?: Date | null;
};
