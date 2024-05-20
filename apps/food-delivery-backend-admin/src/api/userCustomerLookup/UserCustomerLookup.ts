import { AppUser } from "../appUser/AppUser";
import { Customer } from "../customer/Customer";

export type UserCustomerLookup = {
  appUsers?: AppUser;
  customers?: Customer;
  id: string;
};
