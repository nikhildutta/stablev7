import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { HashtagWhereUniqueInput } from "../hashtag/HashtagWhereUniqueInput";

export type UsersHashtagsMapCreateInput = {
  appUsers: AppUserWhereUniqueInput;
  hashtags: HashtagWhereUniqueInput;
};
