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
import {
  IsDate,
  IsOptional,
  ValidateNested,
  IsString,
  IsBoolean,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Discount } from "../../discount/base/Discount";
import { TimeWindow } from "../../timeWindow/base/TimeWindow";
import { EnumDiscountWindowMapTimeWindowDay } from "./EnumDiscountWindowMapTimeWindowDay";

@ObjectType()
class DiscountWindowMap {
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
    required: true,
    type: () => Discount,
  })
  @ValidateNested()
  @Type(() => Discount)
  discount?: Discount;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  is247!: boolean | null;

  @ApiProperty({
    required: true,
    type: () => TimeWindow,
  })
  @ValidateNested()
  @Type(() => TimeWindow)
  timeWindow?: TimeWindow;

  @ApiProperty({
    required: false,
    enum: EnumDiscountWindowMapTimeWindowDay,
  })
  @IsEnum(EnumDiscountWindowMapTimeWindowDay)
  @IsOptional()
  @Field(() => EnumDiscountWindowMapTimeWindowDay, {
    nullable: true,
  })
  time_window_day?:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday"
    | "All_Days"
    | null;

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

export { DiscountWindowMap as DiscountWindowMap };