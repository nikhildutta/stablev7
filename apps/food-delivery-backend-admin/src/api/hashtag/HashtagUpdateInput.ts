import { ContactHashtagsMapUpdateManyWithoutHashtagsInput } from "./ContactHashtagsMapUpdateManyWithoutHashtagsInput";
import { MenuItemsHashtagsMapUpdateManyWithoutHashtagsInput } from "./MenuItemsHashtagsMapUpdateManyWithoutHashtagsInput";
import { OrdersHashtagsMapUpdateManyWithoutHashtagsInput } from "./OrdersHashtagsMapUpdateManyWithoutHashtagsInput";
import { RestaurantsHashtagsMapUpdateManyWithoutHashtagsInput } from "./RestaurantsHashtagsMapUpdateManyWithoutHashtagsInput";
import { UsersHashtagsMapUpdateManyWithoutHashtagsInput } from "./UsersHashtagsMapUpdateManyWithoutHashtagsInput";

export type HashtagUpdateInput = {
  contactHashtagsMap?: ContactHashtagsMapUpdateManyWithoutHashtagsInput;
  hashText?: string | null;
  menuItemsHashtagsMap?: MenuItemsHashtagsMapUpdateManyWithoutHashtagsInput;
  ordersHashtagsMap?: OrdersHashtagsMapUpdateManyWithoutHashtagsInput;
  restaurantsHashtagsMap?: RestaurantsHashtagsMapUpdateManyWithoutHashtagsInput;
  tag?: string | null;
  updatedAt?: Date | null;
  usersHashtagsMap?: UsersHashtagsMapUpdateManyWithoutHashtagsInput;
};
