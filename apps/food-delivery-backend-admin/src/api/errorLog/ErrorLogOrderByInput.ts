import { SortOrder } from "../../util/SortOrder";

export type ErrorLogOrderByInput = {
  user_id?: SortOrder;
  errorCode?: SortOrder;
  errorMessage?: SortOrder;
  id?: SortOrder;
  requestInfo?: SortOrder;
  stackTrace?: SortOrder;
  timestamp?: SortOrder;
};
