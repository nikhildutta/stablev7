import { AccountRestaurantLookup } from "../accountRestaurantLookup/AccountRestaurantLookup";
import { AccountsAddressMap } from "../accountsAddressMap/AccountsAddressMap";

export type Account = {
  accountRestaurantLookup?: Array<AccountRestaurantLookup>;
  accountsAddressMap?: Array<AccountsAddressMap>;
  businessname: string | null;
  city: string | null;
  createdAt: Date | null;
  deliveryStateCode: string | null;
  email: string;
  fssaiLicenseNumber: string | null;
  fssaiLicenseUrl: string | null;
  fssaiValidFrom: Date | null;
  fssaiValidTo: Date | null;
  id: string;
  inceptiondate: Date | null;
  isFssaiLicenseVerified: boolean | null;
  ispaid: boolean | null;
  mobilenumber: string | null;
  pin: string | null;
  updatedAt: Date | null;
  username: string | null;
};
