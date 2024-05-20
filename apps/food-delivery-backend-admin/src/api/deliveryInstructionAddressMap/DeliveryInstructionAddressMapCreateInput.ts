import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { DeliveryPartnerInstructionWhereUniqueInput } from "../deliveryPartnerInstruction/DeliveryPartnerInstructionWhereUniqueInput";

export type DeliveryInstructionAddressMapCreateInput = {
  addresses: AddressWhereUniqueInput;
  deliveryPartnerInstruction: DeliveryPartnerInstructionWhereUniqueInput;
};
