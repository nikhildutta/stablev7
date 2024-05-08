import { AppUser } from "../appUser/AppUser";

export type CustomerPreference = {
  appUsers?: AppUser;
  createdAt: Date | null;
  id: string;
  preferenceType: string | null;
  preferenceValue: string | null;
  updatedAt: Date | null;
};
