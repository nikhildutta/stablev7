import { PortalUsersRelationsLookup as TPortalUsersRelationsLookup } from "../api/portalUsersRelationsLookup/PortalUsersRelationsLookup";

export const PORTALUSERSRELATIONSLOOKUP_TITLE_FIELD = "id";

export const PortalUsersRelationsLookupTitle = (
  record: TPortalUsersRelationsLookup
): string => {
  return record.id?.toString() || String(record.id);
};
