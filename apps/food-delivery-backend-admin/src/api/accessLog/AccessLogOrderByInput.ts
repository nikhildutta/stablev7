import { SortOrder } from "../../util/SortOrder";

export type AccessLogOrderByInput = {
  action?: SortOrder;
  user_id?: SortOrder;
  createdAt?: SortOrder;
  deviceInfo?: SortOrder;
  errorMessage?: SortOrder;
  id?: SortOrder;
  ipAddress?: SortOrder;
  responseStatus?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
