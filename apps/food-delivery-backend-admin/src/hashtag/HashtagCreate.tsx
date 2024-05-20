import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { ContactHashtagsMapTitle } from "../contactHashtagsMap/ContactHashtagsMapTitle";
import { MenuItemsHashtagsMapTitle } from "../menuItemsHashtagsMap/MenuItemsHashtagsMapTitle";
import { OrdersHashtagsMapTitle } from "../ordersHashtagsMap/OrdersHashtagsMapTitle";
import { RestaurantsHashtagsMapTitle } from "../restaurantsHashtagsMap/RestaurantsHashtagsMapTitle";
import { UsersHashtagsMapTitle } from "../usersHashtagsMap/UsersHashtagsMapTitle";

export const HashtagCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="contactHashtagsMap"
          reference="ContactHashtagsMap"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ContactHashtagsMapTitle} />
        </ReferenceArrayInput>
        <TextInput label="Hash Text" source="hashText" />
        <ReferenceArrayInput
          source="menuItemsHashtagsMap"
          reference="MenuItemsHashtagsMap"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MenuItemsHashtagsMapTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="ordersHashtagsMap"
          reference="OrdersHashtagsMap"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrdersHashtagsMapTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="restaurantsHashtagsMap"
          reference="RestaurantsHashtagsMap"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RestaurantsHashtagsMapTitle} />
        </ReferenceArrayInput>
        <TextInput label="Tag" source="tag" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <ReferenceArrayInput
          source="usersHashtagsMap"
          reference="UsersHashtagsMap"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UsersHashtagsMapTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
