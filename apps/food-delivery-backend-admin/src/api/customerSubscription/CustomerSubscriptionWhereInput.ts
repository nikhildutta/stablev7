import { DateTimeFilter } from "../../util/DateTimeFilter";
import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { SubscriptionPlanWhereUniqueInput } from "../subscriptionPlan/SubscriptionPlanWhereUniqueInput";
import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CustomerSubscriptionWhereInput = {
  activationDate?: DateTimeFilter;
  appUsers?: AppUserWhereUniqueInput;
  createdAt?: DateTimeFilter;
  expirationDate?: DateTimeFilter;
  id?: StringFilter;
  renewalCount?: IntFilter;
  subscriptionPlans?: SubscriptionPlanWhereUniqueInput;
  subscriptions?: SubscriptionWhereUniqueInput;
  updatedAt?: DateTimeNullableFilter;
};
