import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";

export type UserFeedbackCreateInput = {
  appUsers: AppUserWhereUniqueInput;
  feedbackText?: string | null;
  updatedAt?: Date | null;
};
