import { JsonValue } from "type-fest";
import { PortalUser } from "../portalUser/PortalUser";

export type AuditLog = {
  approvedBy: string | null;
  changedAt: Date | null;
  id: string;
  isApproved: boolean | null;
  newData: JsonValue;
  oldData: JsonValue;
  operationType: string | null;
  portalUsers?: PortalUser;
  tableName: string | null;
};
