import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DeliveryInstructionAddressMapListRelationFilter } from "../deliveryInstructionAddressMap/DeliveryInstructionAddressMapListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type DeliveryPartnerInstructionWhereInput = {
  addDirectionToReachAudioUrl?: StringNullableFilter;
  addDirectionToReachInstruction?: StringNullableFilter;
  avoidCallingBool?: BooleanNullableFilter;
  avoidRingingBellBool?: BooleanNullableFilter;
  createdAt?: DateTimeNullableFilter;
  deliveryInstructionAddressMap?: DeliveryInstructionAddressMapListRelationFilter;
  id?: StringFilter;
  leaveAtDoorBool?: BooleanNullableFilter;
  leaveWithSecurityBool?: BooleanNullableFilter;
  petAtHome?: BooleanNullableFilter;
  updatedAt?: DateTimeNullableFilter;
};
