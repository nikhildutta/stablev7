import { SortOrder } from "../../util/SortOrder";

export type DeliveryPartnerInstructionOrderByInput = {
  addDirectionToReachAudioUrl?: SortOrder;
  addDirectionToReachInstruction?: SortOrder;
  avoidCallingBool?: SortOrder;
  avoidRingingBellBool?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  leaveAtDoorBool?: SortOrder;
  leaveWithSecurityBool?: SortOrder;
  petAtHome?: SortOrder;
  updatedAt?: SortOrder;
};
