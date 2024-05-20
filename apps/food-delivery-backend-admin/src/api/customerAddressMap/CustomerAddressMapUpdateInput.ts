import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type CustomerAddressMapUpdateInput = {
  addresses?: AddressWhereUniqueInput;
  customers?: CustomerWhereUniqueInput;
};
