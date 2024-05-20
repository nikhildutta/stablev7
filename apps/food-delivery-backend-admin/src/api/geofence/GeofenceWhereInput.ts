import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GeoLocationWhereUniqueInput } from "../geoLocation/GeoLocationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type GeofenceWhereInput = {
  createdAt?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  geoLocations?: GeoLocationWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  radius?: IntNullableFilter;
  updatedAt?: DateTimeNullableFilter;
};
