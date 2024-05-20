import { DeliveryPartnerInstruction as TDeliveryPartnerInstruction } from "../api/deliveryPartnerInstruction/DeliveryPartnerInstruction";

export const DELIVERYPARTNERINSTRUCTION_TITLE_FIELD =
  "addDirectionToReachAudioUrl";

export const DeliveryPartnerInstructionTitle = (
  record: TDeliveryPartnerInstruction
): string => {
  return record.addDirectionToReachAudioUrl?.toString() || String(record.id);
};
