import { PortalUser as TPortalUser } from "../api/portalUser/PortalUser";

export const PORTALUSER_TITLE_FIELD = "emailId";

export const PortalUserTitle = (record: TPortalUser): string => {
  return record.emailId?.toString() || String(record.id);
};
