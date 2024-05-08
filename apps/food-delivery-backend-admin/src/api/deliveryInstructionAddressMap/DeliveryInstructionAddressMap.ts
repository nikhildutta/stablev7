import { Address } from "../address/Address";
import { DeliveryPartnerInstruction } from "../deliveryPartnerInstruction/DeliveryPartnerInstruction";

export type DeliveryInstructionAddressMap = {
  addresses?: Address;
  deliveryPartnerInstruction?: DeliveryPartnerInstruction;
  id: string;
};
