import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type UserCustomerLookupCreateInput = {
  appUsers: AppUserWhereUniqueInput;
  customers: CustomerWhereUniqueInput;
};
