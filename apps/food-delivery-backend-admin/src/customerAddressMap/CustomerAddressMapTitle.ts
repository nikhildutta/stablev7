import { CustomerAddressMap as TCustomerAddressMap } from "../api/customerAddressMap/CustomerAddressMap";

export const CUSTOMERADDRESSMAP_TITLE_FIELD = "id";

export const CustomerAddressMapTitle = (
  record: TCustomerAddressMap
): string => {
  return record.id?.toString() || String(record.id);
};
