import { AppUser } from "../appUser/AppUser";
import { SubscriptionPlan } from "../subscriptionPlan/SubscriptionPlan";
import { Subscription } from "../subscription/Subscription";

export type CustomerSubscription = {
  activationDate: Date;
  appUsers?: AppUser;
  createdAt: Date;
  expirationDate: Date;
  id: string;
  renewalCount: number;
  subscriptionPlans?: SubscriptionPlan;
  subscriptions?: Subscription;
  updatedAt: Date | null;
};
