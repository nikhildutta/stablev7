/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  IsOptional,
  IsInt,
  IsEnum,
  ValidateNested,
  IsDate,
  IsString,
} from "class-validator";
import { Decimal } from "decimal.js";
import { EnumPayoutCyclePayoutStatus } from "./EnumPayoutCyclePayoutStatus";
import { RestaurantWhereUniqueInput } from "../../restaurant/base/RestaurantWhereUniqueInput";
import { Type } from "class-transformer";
import { SettlementsBreakupUpdateManyWithoutPayoutCyclesInput } from "./SettlementsBreakupUpdateManyWithoutPayoutCyclesInput";

@InputType()
class PayoutCycleUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  netPayout?: Decimal | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  numberOfOrders?: number | null;

  @ApiProperty({
    required: false,
    enum: EnumPayoutCyclePayoutStatus,
  })
  @IsEnum(EnumPayoutCyclePayoutStatus)
  @IsOptional()
  @Field(() => EnumPayoutCyclePayoutStatus, {
    nullable: true,
  })
  payout_status?:
    | "Cycle_Inprogress"
    | "Cycle_Complete"
    | "Statement_Generated"
    | "Payout_In_Process"
    | "Settled"
    | null;

  @ApiProperty({
    required: false,
    type: () => RestaurantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RestaurantWhereUniqueInput)
  @IsOptional()
  @Field(() => RestaurantWhereUniqueInput, {
    nullable: true,
  })
  restaurants?: RestaurantWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => SettlementsBreakupUpdateManyWithoutPayoutCyclesInput,
  })
  @ValidateNested()
  @Type(() => SettlementsBreakupUpdateManyWithoutPayoutCyclesInput)
  @IsOptional()
  @Field(() => SettlementsBreakupUpdateManyWithoutPayoutCyclesInput, {
    nullable: true,
  })
  settlementsBreakup?: SettlementsBreakupUpdateManyWithoutPayoutCyclesInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  timePeriodEnd?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  timePeriodStart?: Date | null;

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

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  utrNumber?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  weekNumber?: number | null;
}

export { PayoutCycleUpdateInput as PayoutCycleUpdateInput };