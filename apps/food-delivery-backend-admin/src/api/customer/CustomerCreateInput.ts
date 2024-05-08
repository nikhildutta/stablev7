import { CustomerAddressMapCreateNestedManyWithoutCustomersInput } from "./CustomerAddressMapCreateNestedManyWithoutCustomersInput";
import { UserCustomerLookupCreateNestedManyWithoutCustomersInput } from "./UserCustomerLookupCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  additionaldetails?: string | null;
  anniversary?: Date | null;
  customerAddressMap?: CustomerAddressMapCreateNestedManyWithoutCustomersInput;
  dateOfBirth?: Date | null;
  email?: string | null;
  gender?: "Male" | "Female" | "Other" | "Prefer_not_to_disclose" | null;
  isEmailVerified?: boolean | null;
  isMobileVerified?: boolean | null;
  mobile: string;
  name?: string | null;
  updatedAt?: Date | null;
  userCustomerLookup?: UserCustomerLookupCreateNestedManyWithoutCustomersInput;
};
