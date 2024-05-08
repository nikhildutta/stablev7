import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ErrorLogWhereInput = {
  appUsers?: AppUserWhereUniqueInput;
  errorCode?: IntNullableFilter;
  errorMessage?: StringNullableFilter;
  id?: StringFilter;
  requestInfo?: JsonFilter;
  stackTrace?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
