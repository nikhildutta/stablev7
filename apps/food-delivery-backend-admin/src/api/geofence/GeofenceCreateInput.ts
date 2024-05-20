import { GeoLocationWhereUniqueInput } from "../geoLocation/GeoLocationWhereUniqueInput";

export type GeofenceCreateInput = {
  description?: string | null;
  geoLocations: GeoLocationWhereUniqueInput;
  name?: string | null;
  radius?: number | null;
  updatedAt?: Date | null;
};
