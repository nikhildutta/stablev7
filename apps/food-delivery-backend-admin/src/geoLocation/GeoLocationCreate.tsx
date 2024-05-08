import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { AddressTitle } from "../address/AddressTitle";
import { GeofenceTitle } from "../geofence/GeofenceTitle";

export const GeoLocationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="addresses.id"
          reference="Address"
          label="Addresses"
        >
          <SelectInput optionText={AddressTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="geofences"
          reference="Geofence"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GeofenceTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="Is Geo Fence" source="isGeoFence" />
        <NumberInput label="Latitude" source="latitude" />
        <NumberInput label="Longitude" source="longitude" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
