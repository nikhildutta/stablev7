import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  businessname?: SortOrder;
  city?: SortOrder;
  createdAt?: SortOrder;
  deliveryStateCode?: SortOrder;
  email?: SortOrder;
  fssaiLicenseNumber?: SortOrder;
  fssaiLicenseUrl?: SortOrder;
  fssaiValidFrom?: SortOrder;
  fssaiValidTo?: SortOrder;
  id?: SortOrder;
  inceptiondate?: SortOrder;
  isFssaiLicenseVerified?: SortOrder;
  ispaid?: SortOrder;
  mobilenumber?: SortOrder;
  pin?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
