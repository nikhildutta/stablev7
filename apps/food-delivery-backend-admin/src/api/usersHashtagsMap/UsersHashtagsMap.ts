import { AppUser } from "../appUser/AppUser";
import { Hashtag } from "../hashtag/Hashtag";

export type UsersHashtagsMap = {
  appUsers?: AppUser;
  hashtags?: Hashtag;
  id: string;
};
