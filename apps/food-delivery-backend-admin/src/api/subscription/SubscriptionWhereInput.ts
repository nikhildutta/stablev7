import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CustomerSubscriptionListRelationFilter } from "../customerSubscription/CustomerSubscriptionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { SubscriptionPlanWhereUniqueInput } from "../subscriptionPlan/SubscriptionPlanWhereUniqueInput";

export type SubscriptionWhereInput = {
  appUsers?: AppUserWhereUniqueInput;
  autoRenew?: BooleanFilter;
  createdAt?: DateTimeNullableFilter;
  customerSubscriptions?: CustomerSubscriptionListRelationFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  paymentStatus?: StringFilter;
  startDate?: DateTimeFilter;
  status?: StringFilter;
  subscriptionPlans?: SubscriptionPlanWhereUniqueInput;
  updatedAt?: DateTimeNullableFilter;
};
