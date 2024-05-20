import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type UserCustomerLookupUpdateInput = {
  appUsers?: AppUserWhereUniqueInput;
  customers?: CustomerWhereUniqueInput;
};
