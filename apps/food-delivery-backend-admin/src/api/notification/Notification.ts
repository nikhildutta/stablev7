import { AppUser } from "../appUser/AppUser";

export type Notification = {
  appUsers?: AppUser;
  createdAt: Date | null;
  id: string;
  isRead: boolean | null;
  message: string | null;
};
