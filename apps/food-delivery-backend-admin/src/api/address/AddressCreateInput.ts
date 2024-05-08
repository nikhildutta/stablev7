import { AccountsAddressMapCreateNestedManyWithoutAddressesInput } from "./AccountsAddressMapCreateNestedManyWithoutAddressesInput";
import { ContactDetailCreateNestedManyWithoutAddressesInput } from "./ContactDetailCreateNestedManyWithoutAddressesInput";
import { CustomerAddressMapCreateNestedManyWithoutAddressesInput } from "./CustomerAddressMapCreateNestedManyWithoutAddressesInput";
import { DeliveryInstructionAddressMapCreateNestedManyWithoutAddressesInput } from "./DeliveryInstructionAddressMapCreateNestedManyWithoutAddressesInput";
import { GeoLocationCreateNestedManyWithoutAddressesInput } from "./GeoLocationCreateNestedManyWithoutAddressesInput";
import { OrderHistoryCreateNestedManyWithoutAddressesInput } from "./OrderHistoryCreateNestedManyWithoutAddressesInput";

export type AddressCreateInput = {
  accountsAddressMap?: AccountsAddressMapCreateNestedManyWithoutAddressesInput;
  addressLine1?: string | null;
  addressLine2?: string | null;
  addressLine3?: string | null;
  city?: string | null;
  contactDetails?: ContactDetailCreateNestedManyWithoutAddressesInput;
  country?: string | null;
  customerAddressMap?: CustomerAddressMapCreateNestedManyWithoutAddressesInput;
  deliveryInstructionAddressMap?: DeliveryInstructionAddressMapCreateNestedManyWithoutAddressesInput;
  geoLocations?: GeoLocationCreateNestedManyWithoutAddressesInput;
  isPrimary?: boolean | null;
  nickName?: string | null;
  orderHistory?: OrderHistoryCreateNestedManyWithoutAddressesInput;
  pincode?: string | null;
  state?: string | null;
  updatedAt?: Date | null;
};
