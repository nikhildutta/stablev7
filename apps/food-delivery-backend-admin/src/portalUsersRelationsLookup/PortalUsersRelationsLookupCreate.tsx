import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PortalUserTitle } from "../portalUser/PortalUserTitle";
import { RestaurantTitle } from "../restaurant/RestaurantTitle";

export const PortalUsersRelationsLookupCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="portalUsers.id"
          reference="PortalUser"
          label="Portal Users"
        >
          <SelectInput optionText={PortalUserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="restaurants.id"
          reference="Restaurant"
          label="Restaurants"
        >
          <SelectInput optionText={RestaurantTitle} />
        </ReferenceInput>
        <SelectInput
          source="user_role"
          label="User Role"
          choices={[
            { label: "Owner", value: "Owner" },
            { label: "Manager", value: "Manager" },
            { label: "Staff", value: "Staff" },
            { label: "Account_Manager", value: "Account_Manager" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
