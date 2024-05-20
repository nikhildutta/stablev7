import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type AccountsAddressMapUpdateInput = {
  accounts?: AccountWhereUniqueInput;
  addresses?: AddressWhereUniqueInput;
};
