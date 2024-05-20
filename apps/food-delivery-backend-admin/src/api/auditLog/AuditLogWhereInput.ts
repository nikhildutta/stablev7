import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { PortalUserWhereUniqueInput } from "../portalUser/PortalUserWhereUniqueInput";

export type AuditLogWhereInput = {
  approvedBy?: StringNullableFilter;
  changedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  isApproved?: BooleanNullableFilter;
  newData?: JsonFilter;
  oldData?: JsonFilter;
  operationType?: StringNullableFilter;
  portalUsers?: PortalUserWhereUniqueInput;
  tableName?: StringNullableFilter;
};
