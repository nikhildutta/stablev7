import { DeliveryInstructionAddressMapUpdateManyWithoutDeliveryPartnerInstructionsInput } from "./DeliveryInstructionAddressMapUpdateManyWithoutDeliveryPartnerInstructionsInput";

export type DeliveryPartnerInstructionUpdateInput = {
  addDirectionToReachAudioUrl?: string | null;
  addDirectionToReachInstruction?: string | null;
  avoidCallingBool?: boolean | null;
  avoidRingingBellBool?: boolean | null;
  deliveryInstructionAddressMap?: DeliveryInstructionAddressMapUpdateManyWithoutDeliveryPartnerInstructionsInput;
  leaveAtDoorBool?: boolean | null;
  leaveWithSecurityBool?: boolean | null;
  petAtHome?: boolean | null;
  updatedAt?: Date | null;
};
