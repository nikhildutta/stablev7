import { UserFeedback as TUserFeedback } from "../api/userFeedback/UserFeedback";

export const USERFEEDBACK_TITLE_FIELD = "feedbackText";

export const UserFeedbackTitle = (record: TUserFeedback): string => {
  return record.feedbackText?.toString() || String(record.id);
};
