import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type RewardWhereInput = {
  appUsers?: AppUserWhereUniqueInput;
  createdAt?: DateTimeNullableFilter;
  expirationDate?: DateTimeNullableFilter;
  id?: StringFilter;
  points?: IntNullableFilter;
  updatedAt?: DateTimeNullableFilter;
};
