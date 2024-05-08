import { HashtagWhereUniqueInput } from "../hashtag/HashtagWhereUniqueInput";
import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";

export type MenuItemsHashtagsMapUpdateInput = {
  hashtags?: HashtagWhereUniqueInput;
  menuItems?: MenuItemWhereUniqueInput;
};
