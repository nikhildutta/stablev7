import { ContactDetail } from "../contactDetail/ContactDetail";
import { Hashtag } from "../hashtag/Hashtag";

export type ContactHashtagsMap = {
  contactDetails?: ContactDetail;
  hashtags?: Hashtag;
  id: string;
};
