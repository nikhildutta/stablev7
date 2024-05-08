import { AppUser } from "../appUser/AppUser";

export type Reward = {
  appUsers?: AppUser;
  createdAt: Date | null;
  expirationDate: Date | null;
  id: string;
  points: number | null;
  updatedAt: Date | null;
};
