import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { ContactHashtagsMapListRelationFilter } from "../contactHashtagsMap/ContactHashtagsMapListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ContactDetailWhereInput = {
  addresses?: AddressWhereUniqueInput;
  contactHashtagsMap?: ContactHashtagsMapListRelationFilter;
  contactName?: StringNullableFilter;
  contactNumber?: StringNullableFilter;
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  updatedAt?: DateTimeNullableFilter;
};
