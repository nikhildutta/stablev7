import { CustomerAddressMapUpdateManyWithoutCustomersInput } from "./CustomerAddressMapUpdateManyWithoutCustomersInput";
import { UserCustomerLookupUpdateManyWithoutCustomersInput } from "./UserCustomerLookupUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  additionaldetails?: string | null;
  anniversary?: Date | null;
  customerAddressMap?: CustomerAddressMapUpdateManyWithoutCustomersInput;
  dateOfBirth?: Date | null;
  email?: string | null;
  gender?: "Male" | "Female" | "Other" | "Prefer_not_to_disclose" | null;
  isEmailVerified?: boolean | null;
  isMobileVerified?: boolean | null;
  mobile?: string;
  name?: string | null;
  updatedAt?: Date | null;
  userCustomerLookup?: UserCustomerLookupUpdateManyWithoutCustomersInput;
};
