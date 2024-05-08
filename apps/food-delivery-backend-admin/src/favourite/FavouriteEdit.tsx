import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { AppUserTitle } from "../appUser/AppUserTitle";
import { FavouriteMenuItemTitle } from "../favouriteMenuItem/FavouriteMenuItemTitle";
import { FavouriteRestaurantTitle } from "../favouriteRestaurant/FavouriteRestaurantTitle";

export const FavouriteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="appUsers.id"
          reference="AppUser"
          label="App Users"
        >
          <SelectInput optionText={AppUserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="favouriteMenuItems"
          reference="FavouriteMenuItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FavouriteMenuItemTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="favouriteRestaurant"
          reference="FavouriteRestaurant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FavouriteRestaurantTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
