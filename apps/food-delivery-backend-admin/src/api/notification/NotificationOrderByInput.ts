import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  user_id?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isRead?: SortOrder;
  message?: SortOrder;
};
