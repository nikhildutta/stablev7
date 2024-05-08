import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type CustomerAddressMapCreateInput = {
  addresses: AddressWhereUniqueInput;
  customers: CustomerWhereUniqueInput;
};
