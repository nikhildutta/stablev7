import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type AccountsAddressMapWhereInput = {
  accounts?: AccountWhereUniqueInput;
  addresses?: AddressWhereUniqueInput;
  id?: StringFilter;
};
