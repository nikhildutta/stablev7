import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { GeofenceUpdateManyWithoutGeoLocationsInput } from "./GeofenceUpdateManyWithoutGeoLocationsInput";
import { Decimal } from "decimal.js";

export type GeoLocationUpdateInput = {
  addresses?: AddressWhereUniqueInput;
  geofences?: GeofenceUpdateManyWithoutGeoLocationsInput;
  isGeoFence?: boolean | null;
  latitude?: Decimal | null;
  longitude?: Decimal | null;
  updatedAt?: Date | null;
};
