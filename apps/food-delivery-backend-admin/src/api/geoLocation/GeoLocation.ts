import { Address } from "../address/Address";
import { Geofence } from "../geofence/Geofence";
import { Decimal } from "decimal.js";

export type GeoLocation = {
  addresses?: Address;
  createdAt: Date | null;
  geofences?: Array<Geofence>;
  id: string;
  isGeoFence: boolean | null;
  latitude: Decimal | null;
  longitude: Decimal | null;
  updatedAt: Date | null;
};
