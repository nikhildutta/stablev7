import { DeliveryInstructionAddressMap as TDeliveryInstructionAddressMap } from "../api/deliveryInstructionAddressMap/DeliveryInstructionAddressMap";

export const DELIVERYINSTRUCTIONADDRESSMAP_TITLE_FIELD = "id";

export const DeliveryInstructionAddressMapTitle = (
  record: TDeliveryInstructionAddressMap
): string => {
  return record.id?.toString() || String(record.id);
};
