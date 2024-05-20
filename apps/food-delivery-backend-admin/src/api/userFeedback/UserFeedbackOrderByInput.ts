import { SortOrder } from "../../util/SortOrder";

export type UserFeedbackOrderByInput = {
  user_id?: SortOrder;
  createdAt?: SortOrder;
  feedbackText?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
