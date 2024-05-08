import { ComplaintsPhoto as TComplaintsPhoto } from "../api/complaintsPhoto/ComplaintsPhoto";

export const COMPLAINTSPHOTO_TITLE_FIELD = "complaintImageUrl";

export const ComplaintsPhotoTitle = (record: TComplaintsPhoto): string => {
  return record.complaintImageUrl?.toString() || String(record.id);
};
