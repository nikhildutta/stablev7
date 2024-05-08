import { GeoLocation as TGeoLocation } from "../api/geoLocation/GeoLocation";

export const GEOLOCATION_TITLE_FIELD = "id";

export const GeoLocationTitle = (record: TGeoLocation): string => {
  return record.id?.toString() || String(record.id);
};
