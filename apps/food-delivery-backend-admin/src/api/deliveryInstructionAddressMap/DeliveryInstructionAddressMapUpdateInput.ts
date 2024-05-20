import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { DeliveryPartnerInstructionWhereUniqueInput } from "../deliveryPartnerInstruction/DeliveryPartnerInstructionWhereUniqueInput";

export type DeliveryInstructionAddressMapUpdateInput = {
  addresses?: AddressWhereUniqueInput;
  deliveryPartnerInstruction?: DeliveryPartnerInstructionWhereUniqueInput;
};
