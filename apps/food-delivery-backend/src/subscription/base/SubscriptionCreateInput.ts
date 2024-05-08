/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AppUserWhereUniqueInput } from "../../appUser/base/AppUserWhereUniqueInput";
import {
  ValidateNested,
  IsBoolean,
  IsOptional,
  IsDate,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { CustomerSubscriptionCreateNestedManyWithoutSubscriptionsInput } from "./CustomerSubscriptionCreateNestedManyWithoutSubscriptionsInput";
import { SubscriptionPlanWhereUniqueInput } from "../../subscriptionPlan/base/SubscriptionPlanWhereUniqueInput";

@InputType()
class SubscriptionCreateInput {
  @ApiProperty({
    required: true,
    type: () => AppUserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AppUserWhereUniqueInput)
  @Field(() => AppUserWhereUniqueInput)
  appUsers!: AppUserWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  autoRenew!: boolean;

  @ApiProperty({
    required: false,
    type: () => CustomerSubscriptionCreateNestedManyWithoutSubscriptionsInput,
  })
  @ValidateNested()
  @Type(() => CustomerSubscriptionCreateNestedManyWithoutSubscriptionsInput)
  @IsOptional()
  @Field(() => CustomerSubscriptionCreateNestedManyWithoutSubscriptionsInput, {
    nullable: true,
  })
  customerSubscriptions?: CustomerSubscriptionCreateNestedManyWithoutSubscriptionsInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endDate?: Date | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  paymentStatus!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  startDate!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  status!: string;

  @ApiProperty({
    required: true,
    type: () => SubscriptionPlanWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SubscriptionPlanWhereUniqueInput)
  @Field(() => SubscriptionPlanWhereUniqueInput)
  subscriptionPlans!: SubscriptionPlanWhereUniqueInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt?: Date | null;
}

export { SubscriptionCreateInput as SubscriptionCreateInput };
