import { AuditLogListRelationFilter } from "../auditLog/AuditLogListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { PortalUsersRelationsLookupListRelationFilter } from "../portalUsersRelationsLookup/PortalUsersRelationsLookupListRelationFilter";

export type PortalUserWhereInput = {
  auditLogs?: AuditLogListRelationFilter;
  createdAt?: DateTimeNullableFilter;
  emailId?: StringNullableFilter;
  id?: StringFilter;
  isEmailIdVerified?: BooleanNullableFilter;
  isPhoneNumberVerified?: BooleanNullableFilter;
  phoneNumber?: StringNullableFilter;
  portalUsersRelationsLookup?: PortalUsersRelationsLookupListRelationFilter;
  profilePicUrl?: StringNullableFilter;
  updatedAt?: DateTimeNullableFilter;
};
