import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  user_id?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  reportData?: SortOrder;
  reportType?: SortOrder;
  updatedAt?: SortOrder;
};
