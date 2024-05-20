import { GeoLocationWhereUniqueInput } from "../geoLocation/GeoLocationWhereUniqueInput";

export type GeofenceUpdateInput = {
  description?: string | null;
  geoLocations?: GeoLocationWhereUniqueInput;
  name?: string | null;
  radius?: number | null;
  updatedAt?: Date | null;
};
