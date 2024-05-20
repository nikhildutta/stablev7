import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type CustomerAddressMapWhereInput = {
  addresses?: AddressWhereUniqueInput;
  customers?: CustomerWhereUniqueInput;
  id?: StringFilter;
};
