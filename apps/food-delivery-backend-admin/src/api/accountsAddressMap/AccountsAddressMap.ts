import { Account } from "../account/Account";
import { Address } from "../address/Address";

export type AccountsAddressMap = {
  accounts?: Account;
  addresses?: Address;
  id: string;
};
