import { AuditLogCreateNestedManyWithoutPortalUsersInput } from "./AuditLogCreateNestedManyWithoutPortalUsersInput";
import { PortalUsersRelationsLookupCreateNestedManyWithoutPortalUsersInput } from "./PortalUsersRelationsLookupCreateNestedManyWithoutPortalUsersInput";

export type PortalUserCreateInput = {
  auditLogs?: AuditLogCreateNestedManyWithoutPortalUsersInput;
  emailId?: string | null;
  isEmailIdVerified?: boolean | null;
  isPhoneNumberVerified?: boolean | null;
  phoneNumber?: string | null;
  portalUsersRelationsLookup?: PortalUsersRelationsLookupCreateNestedManyWithoutPortalUsersInput;
  profilePicUrl?: string | null;
  updatedAt?: Date | null;
};
