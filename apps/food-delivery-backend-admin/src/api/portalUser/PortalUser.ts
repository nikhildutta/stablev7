import { AuditLog } from "../auditLog/AuditLog";
import { PortalUsersRelationsLookup } from "../portalUsersRelationsLookup/PortalUsersRelationsLookup";

export type PortalUser = {
  auditLogs?: Array<AuditLog>;
  createdAt: Date | null;
  emailId: string | null;
  id: string;
  isEmailIdVerified: boolean | null;
  isPhoneNumberVerified: boolean | null;
  phoneNumber: string | null;
  portalUsersRelationsLookup?: Array<PortalUsersRelationsLookup>;
  profilePicUrl: string | null;
  updatedAt: Date | null;
};
