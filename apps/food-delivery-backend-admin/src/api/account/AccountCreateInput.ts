import { AccountRestaurantLookupCreateNestedManyWithoutAccountsInput } from "./AccountRestaurantLookupCreateNestedManyWithoutAccountsInput";
import { AccountsAddressMapCreateNestedManyWithoutAccountsInput } from "./AccountsAddressMapCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  accountRestaurantLookup?: AccountRestaurantLookupCreateNestedManyWithoutAccountsInput;
  accountsAddressMap?: AccountsAddressMapCreateNestedManyWithoutAccountsInput;
  businessname?: string | null;
  city?: string | null;
  deliveryStateCode?: string | null;
  email: string;
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
