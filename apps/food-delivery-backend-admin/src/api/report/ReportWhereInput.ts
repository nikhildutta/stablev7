import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ReportWhereInput = {
  appUsers?: AppUserWhereUniqueInput;
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  reportData?: JsonFilter;
  reportType?: StringNullableFilter;
  updatedAt?: DateTimeNullableFilter;
};
