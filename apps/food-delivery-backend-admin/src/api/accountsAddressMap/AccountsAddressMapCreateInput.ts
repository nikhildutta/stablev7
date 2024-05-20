import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type AccountsAddressMapCreateInput = {
  accounts: AccountWhereUniqueInput;
  addresses: AddressWhereUniqueInput;
};
