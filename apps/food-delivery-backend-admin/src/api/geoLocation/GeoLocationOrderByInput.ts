import { SortOrder } from "../../util/SortOrder";

export type GeoLocationOrderByInput = {
  address_id?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isGeoFence?: SortOrder;
  latitude?: SortOrder;
  longitude?: SortOrder;
  updatedAt?: SortOrder;
};
