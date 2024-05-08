import { HashtagWhereUniqueInput } from "../hashtag/HashtagWhereUniqueInput";
import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";

export type MenuItemsHashtagsMapCreateInput = {
  hashtags: HashtagWhereUniqueInput;
  menuItems: MenuItemWhereUniqueInput;
};
