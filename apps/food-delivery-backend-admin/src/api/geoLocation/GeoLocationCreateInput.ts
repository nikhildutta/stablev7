import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { GeofenceCreateNestedManyWithoutGeoLocationsInput } from "./GeofenceCreateNestedManyWithoutGeoLocationsInput";
import { Decimal } from "decimal.js";

export type GeoLocationCreateInput = {
  addresses: AddressWhereUniqueInput;
  geofences?: GeofenceCreateNestedManyWithoutGeoLocationsInput;
  isGeoFence?: boolean | null;
  latitude?: Decimal | null;
  longitude?: Decimal | null;
  updatedAt?: Date | null;
};
