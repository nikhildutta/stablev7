import { InputJsonValue } from "../../types";
import { PortalUserWhereUniqueInput } from "../portalUser/PortalUserWhereUniqueInput";

export type AuditLogUpdateInput = {
  approvedBy?: string | null;
  isApproved?: boolean | null;
  newData?: InputJsonValue;
  oldData?: InputJsonValue;
  operationType?: string | null;
  portalUsers?: PortalUserWhereUniqueInput;
  tableName?: string | null;
};
