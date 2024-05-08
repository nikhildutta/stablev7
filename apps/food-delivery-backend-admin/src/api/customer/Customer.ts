import { CustomerAddressMap } from "../customerAddressMap/CustomerAddressMap";
import { UserCustomerLookup } from "../userCustomerLookup/UserCustomerLookup";

export type Customer = {
  additionaldetails: string | null;
  anniversary: Date | null;
  createdAt: Date | null;
  customerAddressMap?: Array<CustomerAddressMap>;
  dateOfBirth: Date | null;
  email: string | null;
  gender?: "Male" | "Female" | "Other" | "Prefer_not_to_disclose" | null;
  id: string;
  isEmailVerified: boolean | null;
  isMobileVerified: boolean | null;
  mobile: string;
  name: string | null;
  updatedAt: Date | null;
  userCustomerLookup?: Array<UserCustomerLookup>;
};
