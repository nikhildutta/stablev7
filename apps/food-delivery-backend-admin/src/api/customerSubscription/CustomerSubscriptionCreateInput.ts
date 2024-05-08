import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { SubscriptionPlanWhereUniqueInput } from "../subscriptionPlan/SubscriptionPlanWhereUniqueInput";
import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";

export type CustomerSubscriptionCreateInput = {
  activationDate: Date;
  appUsers: AppUserWhereUniqueInput;
  expirationDate: Date;
  renewalCount: number;
  subscriptionPlans: SubscriptionPlanWhereUniqueInput;
  subscriptions: SubscriptionWhereUniqueInput;
  updatedAt?: Date | null;
};
