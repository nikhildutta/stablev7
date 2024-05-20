import { AccountRestaurantLookupUpdateManyWithoutAccountsInput } from "./AccountRestaurantLookupUpdateManyWithoutAccountsInput";
import { AccountsAddressMapUpdateManyWithoutAccountsInput } from "./AccountsAddressMapUpdateManyWithoutAccountsInput";

export type AccountUpdateInput = {
  accountRestaurantLookup?: AccountRestaurantLookupUpdateManyWithoutAccountsInput;
  accountsAddressMap?: AccountsAddressMapUpdateManyWithoutAccountsInput;
  businessname?: string | null;
  city?: string | null;
  deliveryStateCode?: string | null;
  email?: string;
  fssaiLicenseNumber?: string | null;
  fssaiLicenseUrl?: string | null;
  fssaiValidFrom?: Date | null;
  fssaiValidTo?: Date | null;
  inceptiondate?: Date | null;
  isFssaiLicenseVerified?: boolean | null;
  ispaid?: boolean | null;
  mobilenumber?: string | null;
  pin?: string | null;
  updatedAt?: Date | null;
  username?: string | null;
};
