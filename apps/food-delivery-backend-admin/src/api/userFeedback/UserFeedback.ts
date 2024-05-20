import { AppUser } from "../appUser/AppUser";

export type UserFeedback = {
  appUsers?: AppUser;
  createdAt: Date | null;
  feedbackText: string | null;
  id: string;
  updatedAt: Date | null;
};
