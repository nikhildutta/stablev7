import { ContactDetailWhereUniqueInput } from "../contactDetail/ContactDetailWhereUniqueInput";
import { HashtagWhereUniqueInput } from "../hashtag/HashtagWhereUniqueInput";

export type ContactHashtagsMapCreateInput = {
  contactDetails: ContactDetailWhereUniqueInput;
  hashtags: HashtagWhereUniqueInput;
};
