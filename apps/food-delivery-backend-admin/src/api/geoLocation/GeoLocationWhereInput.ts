import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { GeofenceListRelationFilter } from "../geofence/GeofenceListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";

export type GeoLocationWhereInput = {
  addresses?: AddressWhereUniqueInput;
  createdAt?: DateTimeNullableFilter;
  geofences?: GeofenceListRelationFilter;
  id?: StringFilter;
  isGeoFence?: BooleanNullableFilter;
  latitude?: DecimalNullableFilter;
  longitude?: DecimalNullableFilter;
  updatedAt?: DateTimeNullableFilter;
};
