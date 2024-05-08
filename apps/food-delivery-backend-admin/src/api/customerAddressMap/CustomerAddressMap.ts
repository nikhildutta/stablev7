import { Address } from "../address/Address";
import { Customer } from "../customer/Customer";

export type CustomerAddressMap = {
  addresses?: Address;
  customers?: Customer;
  id: string;
};
