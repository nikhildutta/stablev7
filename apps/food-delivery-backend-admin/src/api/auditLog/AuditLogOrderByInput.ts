import { SortOrder } from "../../util/SortOrder";

export type AuditLogOrderByInput = {
  approvedBy?: SortOrder;
  changedAt?: SortOrder;
  id?: SortOrder;
  isApproved?: SortOrder;
  newData?: SortOrder;
  oldData?: SortOrder;
  operationType?: SortOrder;
  portal_user_id?: SortOrder;
  tableName?: SortOrder;
};
