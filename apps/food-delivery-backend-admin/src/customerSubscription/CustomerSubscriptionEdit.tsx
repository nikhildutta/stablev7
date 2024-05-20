import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { AppUserTitle } from "../appUser/AppUserTitle";
import { SubscriptionPlanTitle } from "../subscriptionPlan/SubscriptionPlanTitle";
import { SubscriptionTitle } from "../subscription/SubscriptionTitle";

export const CustomerSubscriptionEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Activation Date" source="activationDate" />
        <ReferenceInput
          source="appUsers.id"
          reference="AppUser"
          label="App Users"
        >
          <SelectInput optionText={AppUserTitle} />
        </ReferenceInput>
        <DateTimeInput label="Expiration Date" source="expirationDate" />
        <NumberInput step={1} label="Renewal Count" source="renewalCount" />
        <ReferenceInput
          source="subscriptionPlans.id"
          reference="SubscriptionPlan"
          label="Subscription Plans"
        >
          <SelectInput optionText={SubscriptionPlanTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="subscriptions.id"
          reference="Subscription"
          label="Subscriptions"
        >
          <SelectInput optionText={SubscriptionTitle} />
        </ReferenceInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
