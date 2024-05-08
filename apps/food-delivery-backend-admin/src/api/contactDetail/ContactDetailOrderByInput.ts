import { SortOrder } from "../../util/SortOrder";

export type ContactDetailOrderByInput = {
  address_id?: SortOrder;
  contactName?: SortOrder;
  contactNumber?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
