import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";

export type UserFeedbackUpdateInput = {
  appUsers?: AppUserWhereUniqueInput;
  feedbackText?: string | null;
  updatedAt?: Date | null;
};
