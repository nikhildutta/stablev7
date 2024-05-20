import { AccountRestaurantLookupListRelationFilter } from "../accountRestaurantLookup/AccountRestaurantLookupListRelationFilter";
import { AccountsAddressMapListRelationFilter } from "../accountsAddressMap/AccountsAddressMapListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type AccountWhereInput = {
  accountRestaurantLookup?: AccountRestaurantLookupListRelationFilter;
  accountsAddressMap?: AccountsAddressMapListRelationFilter;
  businessname?: StringNullableFilter;
  city?: StringNullableFilter;
  createdAt?: DateTimeNullableFilter;
  deliveryStateCode?: StringNullableFilter;
  email?: StringFilter;
  fssaiLicenseNumber?: StringNullableFilter;
  fssaiLicenseUrl?: StringNullableFilter;
  fssaiValidFrom?: DateTimeNullableFilter;
  fssaiValidTo?: DateTimeNullableFilter;
  id?: StringFilter;
  inceptiondate?: DateTimeNullableFilter;
  isFssaiLicenseVerified?: BooleanNullableFilter;
  ispaid?: BooleanNullableFilter;
  mobilenumber?: StringNullableFilter;
  pin?: StringNullableFilter;
  updatedAt?: DateTimeNullableFilter;
  username?: StringNullableFilter;
};
