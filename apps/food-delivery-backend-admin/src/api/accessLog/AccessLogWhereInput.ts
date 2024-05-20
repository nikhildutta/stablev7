import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AccessLogWhereInput = {
  action?: StringNullableFilter;
  appUsers?: AppUserWhereUniqueInput;
  createdAt?: DateTimeNullableFilter;
  deviceInfo?: JsonFilter;
  errorMessage?: StringNullableFilter;
  id?: StringFilter;
  ipAddress?: StringNullableFilter;
  responseStatus?: IntNullableFilter;
  timestamp?: DateTimeNullableFilter;
  updatedAt?: DateTimeNullableFilter;
};
