import { AuditLogUpdateManyWithoutPortalUsersInput } from "./AuditLogUpdateManyWithoutPortalUsersInput";
import { PortalUsersRelationsLookupUpdateManyWithoutPortalUsersInput } from "./PortalUsersRelationsLookupUpdateManyWithoutPortalUsersInput";

export type PortalUserUpdateInput = {
  auditLogs?: AuditLogUpdateManyWithoutPortalUsersInput;
  emailId?: string | null;
  isEmailIdVerified?: boolean | null;
  isPhoneNumberVerified?: boolean | null;
  phoneNumber?: string | null;
  portalUsersRelationsLookup?: PortalUsersRelationsLookupUpdateManyWithoutPortalUsersInput;
  profilePicUrl?: string | null;
  updatedAt?: Date | null;
};
