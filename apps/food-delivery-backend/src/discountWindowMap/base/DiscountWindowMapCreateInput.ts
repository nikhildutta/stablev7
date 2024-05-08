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
import { DiscountWhereUniqueInput } from "../../discount/base/DiscountWhereUniqueInput";
import {
  ValidateNested,
  IsBoolean,
  IsOptional,
  IsEnum,
  IsDate,
} from "class-validator";
import { Type } from "class-transformer";
import { TimeWindowWhereUniqueInput } from "../../timeWindow/base/TimeWindowWhereUniqueInput";
import { EnumDiscountWindowMapTimeWindowDay } from "./EnumDiscountWindowMapTimeWindowDay";

@InputType()
class DiscountWindowMapCreateInput {
  @ApiProperty({
    required: true,
    type: () => DiscountWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DiscountWhereUniqueInput)
  @Field(() => DiscountWhereUniqueInput)
  discount!: DiscountWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  is247?: boolean | null;

  @ApiProperty({
    required: true,
    type: () => TimeWindowWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TimeWindowWhereUniqueInput)
  @Field(() => TimeWindowWhereUniqueInput)
  timeWindow!: TimeWindowWhereUniqueInput;

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
  updatedAt?: Date | null;
}

export { DiscountWindowMapCreateInput as DiscountWindowMapCreateInput };