import { AccountsAddressMapUpdateManyWithoutAddressesInput } from "./AccountsAddressMapUpdateManyWithoutAddressesInput";
import { ContactDetailUpdateManyWithoutAddressesInput } from "./ContactDetailUpdateManyWithoutAddressesInput";
import { CustomerAddressMapUpdateManyWithoutAddressesInput } from "./CustomerAddressMapUpdateManyWithoutAddressesInput";
import { DeliveryInstructionAddressMapUpdateManyWithoutAddressesInput } from "./DeliveryInstructionAddressMapUpdateManyWithoutAddressesInput";
import { GeoLocationUpdateManyWithoutAddressesInput } from "./GeoLocationUpdateManyWithoutAddressesInput";
import { OrderHistoryUpdateManyWithoutAddressesInput } from "./OrderHistoryUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  accountsAddressMap?: AccountsAddressMapUpdateManyWithoutAddressesInput;
  addressLine1?: string | null;
  addressLine2?: string | null;
  addressLine3?: string | null;
  city?: string | null;
  contactDetails?: ContactDetailUpdateManyWithoutAddressesInput;
  country?: string | null;
  customerAddressMap?: CustomerAddressMapUpdateManyWithoutAddressesInput;
  deliveryInstructionAddressMap?: DeliveryInstructionAddressMapUpdateManyWithoutAddressesInput;
  geoLocations?: GeoLocationUpdateManyWithoutAddressesInput;
  isPrimary?: boolean | null;
  nickName?: string | null;
  orderHistory?: OrderHistoryUpdateManyWithoutAddressesInput;
  pincode?: string | null;
  state?: string | null;
  updatedAt?: Date | null;
};
