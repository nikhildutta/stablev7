import { SortOrder } from "../../util/SortOrder";

export type AddressOrderByInput = {
  addressLine1?: SortOrder;
  addressLine2?: SortOrder;
  addressLine3?: SortOrder;
  city?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isPrimary?: SortOrder;
  nickName?: SortOrder;
  pincode?: SortOrder;
  state?: SortOrder;
  updatedAt?: SortOrder;
};
