import { ContactHashtagsMapCreateNestedManyWithoutHashtagsInput } from "./ContactHashtagsMapCreateNestedManyWithoutHashtagsInput";
import { MenuItemsHashtagsMapCreateNestedManyWithoutHashtagsInput } from "./MenuItemsHashtagsMapCreateNestedManyWithoutHashtagsInput";
import { OrdersHashtagsMapCreateNestedManyWithoutHashtagsInput } from "./OrdersHashtagsMapCreateNestedManyWithoutHashtagsInput";
import { RestaurantsHashtagsMapCreateNestedManyWithoutHashtagsInput } from "./RestaurantsHashtagsMapCreateNestedManyWithoutHashtagsInput";
import { UsersHashtagsMapCreateNestedManyWithoutHashtagsInput } from "./UsersHashtagsMapCreateNestedManyWithoutHashtagsInput";

export type HashtagCreateInput = {
  contactHashtagsMap?: ContactHashtagsMapCreateNestedManyWithoutHashtagsInput;
  hashText?: string | null;
  menuItemsHashtagsMap?: MenuItemsHashtagsMapCreateNestedManyWithoutHashtagsInput;
  ordersHashtagsMap?: OrdersHashtagsMapCreateNestedManyWithoutHashtagsInput;
  restaurantsHashtagsMap?: RestaurantsHashtagsMapCreateNestedManyWithoutHashtagsInput;
  tag?: string | null;
  updatedAt?: Date | null;
  usersHashtagsMap?: UsersHashtagsMapCreateNestedManyWithoutHashtagsInput;
};
