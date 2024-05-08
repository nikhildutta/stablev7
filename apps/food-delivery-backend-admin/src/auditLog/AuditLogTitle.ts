import { AuditLog as TAuditLog } from "../api/auditLog/AuditLog";

export const AUDITLOG_TITLE_FIELD = "tableName";

export const AuditLogTitle = (record: TAuditLog): string => {
  return record.tableName?.toString() || String(record.id);
};
