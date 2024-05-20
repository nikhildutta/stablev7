/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AppUser } from "../../appUser/base/AppUser";
import {
  ValidateNested,
  IsBoolean,
  IsDate,
  IsOptional,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { CustomerSubscription } from "../../customerSubscription/base/CustomerSubscription";
import { SubscriptionPlan } from "../../subscriptionPlan/base/SubscriptionPlan";

@ObjectType()
class Subscription {
  @ApiProperty({
    required: true,
    type: () => AppUser,
  })
  @ValidateNested()
  @Type(() => AppUser)
  appUsers?: AppUser;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  autoRenew!: boolean;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  createdAt!: Date | null;

  @ApiProperty({
    required: false,
    type: () => [CustomerSubscription],
  })
  @ValidateNested()
  @Type(() => CustomerSubscription)
  @IsOptional()
  customerSubscriptions?: Array<CustomerSubscription>;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endDate!: Date | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

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
    type: () => SubscriptionPlan,
  })
  @ValidateNested()
  @Type(() => SubscriptionPlan)
  subscriptionPlans?: SubscriptionPlan;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt!: Date | null;
}

export { Subscription as Subscription };
