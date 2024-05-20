import { ContactHashtagsMapListRelationFilter } from "../contactHashtagsMap/ContactHashtagsMapListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MenuItemsHashtagsMapListRelationFilter } from "../menuItemsHashtagsMap/MenuItemsHashtagsMapListRelationFilter";
import { OrdersHashtagsMapListRelationFilter } from "../ordersHashtagsMap/OrdersHashtagsMapListRelationFilter";
import { RestaurantsHashtagsMapListRelationFilter } from "../restaurantsHashtagsMap/RestaurantsHashtagsMapListRelationFilter";
import { UsersHashtagsMapListRelationFilter } from "../usersHashtagsMap/UsersHashtagsMapListRelationFilter";

export type HashtagWhereInput = {
  contactHashtagsMap?: ContactHashtagsMapListRelationFilter;
  createdAt?: DateTimeNullableFilter;
  hashText?: StringNullableFilter;
  id?: StringFilter;
  menuItemsHashtagsMap?: MenuItemsHashtagsMapListRelationFilter;
  ordersHashtagsMap?: OrdersHashtagsMapListRelationFilter;
  restaurantsHashtagsMap?: RestaurantsHashtagsMapListRelationFilter;
  tag?: StringNullableFilter;
  updatedAt?: DateTimeNullableFilter;
  usersHashtagsMap?: UsersHashtagsMapListRelationFilter;
};
