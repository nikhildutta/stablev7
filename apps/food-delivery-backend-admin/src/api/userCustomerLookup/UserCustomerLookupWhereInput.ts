import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type UserCustomerLookupWhereInput = {
  appUsers?: AppUserWhereUniqueInput;
  customers?: CustomerWhereUniqueInput;
  id?: StringFilter;
};
