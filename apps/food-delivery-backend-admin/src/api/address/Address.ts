import { AccountsAddressMap } from "../accountsAddressMap/AccountsAddressMap";
import { ContactDetail } from "../contactDetail/ContactDetail";
import { CustomerAddressMap } from "../customerAddressMap/CustomerAddressMap";
import { DeliveryInstructionAddressMap } from "../deliveryInstructionAddressMap/DeliveryInstructionAddressMap";
import { GeoLocation } from "../geoLocation/GeoLocation";
import { OrderHistory } from "../orderHistory/OrderHistory";

export type Address = {
  accountsAddressMap?: Array<AccountsAddressMap>;
  addressLine1: string | null;
  addressLine2: string | null;
  addressLine3: string | null;
  city: string | null;
  contactDetails?: Array<ContactDetail>;
  country: string | null;
  createdAt: Date | null;
  customerAddressMap?: Array<CustomerAddressMap>;
  deliveryInstructionAddressMap?: Array<DeliveryInstructionAddressMap>;
  geoLocations?: Array<GeoLocation>;
  id: string;
  isPrimary: boolean | null;
  nickName: string | null;
  orderHistory?: Array<OrderHistory>;
  pincode: string | null;
  state: string | null;
  updatedAt: Date | null;
};
