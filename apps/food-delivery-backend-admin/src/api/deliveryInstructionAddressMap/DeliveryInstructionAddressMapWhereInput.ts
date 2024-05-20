import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { DeliveryPartnerInstructionWhereUniqueInput } from "../deliveryPartnerInstruction/DeliveryPartnerInstructionWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type DeliveryInstructionAddressMapWhereInput = {
  addresses?: AddressWhereUniqueInput;
  deliveryPartnerInstruction?: DeliveryPartnerInstructionWhereUniqueInput;
  id?: StringFilter;
};
