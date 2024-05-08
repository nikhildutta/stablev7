import { AppUser } from "../appUser/AppUser";

export type SsoLookup = {
  appleEmail: string | null;
  appleFamilyName: string | null;
  appleGivenName: string | null;
  appleRefreshToken: string | null;
  appleTokenExpiresAt: Date | null;
  appleUserId: string | null;
  appUsers?: AppUser;
  createdAt: Date | null;
  facebookAccessToken: string | null;
  facebookEmail: string | null;
  facebookName: string | null;
  facebookTokenExpiresAt: Date | null;
  facebookUserId: string | null;
  googleEmail: string | null;
  googleFamilyName: string | null;
  googleGivenName: string | null;
  googleRefreshToken: string | null;
  googleTokenExpiresAt: Date | null;
  googleUserId: string | null;
  id: string;
  twitterAccessToken: string | null;
  twitterHandle: string | null;
  twitterTokenSecret: string | null;
  twitterUserId: string | null;
  updatedAt: Date | null;
};
