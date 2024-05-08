import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CustomerPreferenceWhereInput = {
  appUsers?: AppUserWhereUniqueInput;
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  preferenceType?: StringNullableFilter;
  preferenceValue?: StringNullableFilter;
  updatedAt?: DateTimeNullableFilter;
};
