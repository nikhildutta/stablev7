import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CustomerAddressMapListRelationFilter } from "../customerAddressMap/CustomerAddressMapListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserCustomerLookupListRelationFilter } from "../userCustomerLookup/UserCustomerLookupListRelationFilter";

export type CustomerWhereInput = {
  additionaldetails?: StringNullableFilter;
  anniversary?: DateTimeNullableFilter;
  createdAt?: DateTimeNullableFilter;
  customerAddressMap?: CustomerAddressMapListRelationFilter;
  dateOfBirth?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  gender?: "Male" | "Female" | "Other" | "Prefer_not_to_disclose";
  id?: StringFilter;
  isEmailVerified?: BooleanNullableFilter;
  isMobileVerified?: BooleanNullableFilter;
  mobile?: StringFilter;
  name?: StringNullableFilter;
  updatedAt?: DateTimeNullableFilter;
  userCustomerLookup?: UserCustomerLookupListRelationFilter;
};
