import { DeliveryInstructionAddressMap } from "../deliveryInstructionAddressMap/DeliveryInstructionAddressMap";

export type DeliveryPartnerInstruction = {
  addDirectionToReachAudioUrl: string | null;
  addDirectionToReachInstruction: string | null;
  avoidCallingBool: boolean | null;
  avoidRingingBellBool: boolean | null;
  createdAt: Date | null;
  deliveryInstructionAddressMap?: Array<DeliveryInstructionAddressMap>;
  id: string;
  leaveAtDoorBool: boolean | null;
  leaveWithSecurityBool: boolean | null;
  petAtHome: boolean | null;
  updatedAt: Date | null;
};
