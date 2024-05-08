import { SortOrder } from "../../util/SortOrder";

export type PortalUserOrderByInput = {
  createdAt?: SortOrder;
  emailId?: SortOrder;
  id?: SortOrder;
  isEmailIdVerified?: SortOrder;
  isPhoneNumberVerified?: SortOrder;
  phoneNumber?: SortOrder;
  profilePicUrl?: SortOrder;
  updatedAt?: SortOrder;
};
