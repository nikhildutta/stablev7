import { ContactHashtagsMap } from "../contactHashtagsMap/ContactHashtagsMap";
import { MenuItemsHashtagsMap } from "../menuItemsHashtagsMap/MenuItemsHashtagsMap";
import { OrdersHashtagsMap } from "../ordersHashtagsMap/OrdersHashtagsMap";
import { RestaurantsHashtagsMap } from "../restaurantsHashtagsMap/RestaurantsHashtagsMap";
import { UsersHashtagsMap } from "../usersHashtagsMap/UsersHashtagsMap";

export type Hashtag = {
  contactHashtagsMap?: Array<ContactHashtagsMap>;
  createdAt: Date | null;
  hashText: string | null;
  id: string;
  menuItemsHashtagsMap?: Array<MenuItemsHashtagsMap>;
  ordersHashtagsMap?: Array<OrdersHashtagsMap>;
  restaurantsHashtagsMap?: Array<RestaurantsHashtagsMap>;
  tag: string | null;
  updatedAt: Date | null;
  usersHashtagsMap?: Array<UsersHashtagsMap>;
};
