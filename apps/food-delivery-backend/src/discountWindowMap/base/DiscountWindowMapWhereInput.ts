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
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { DiscountWhereUniqueInput } from "../../discount/base/DiscountWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { TimeWindowWhereUniqueInput } from "../../timeWindow/base/TimeWindowWhereUniqueInput";
import { EnumDiscountWindowMapTimeWindowDay } from "./EnumDiscountWindowMapTimeWindowDay";

@InputType()
class DiscountWindowMapWhereInput {
  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  createdAt?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: () => DiscountWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DiscountWhereUniqueInput)
  @IsOptional()
  @Field(() => DiscountWhereUniqueInput, {
    nullable: true,
  })
  discount?: DiscountWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  is247?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: () => TimeWindowWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TimeWindowWhereUniqueInput)
  @IsOptional()
  @Field(() => TimeWindowWhereUniqueInput, {
    nullable: true,
  })
  timeWindow?: TimeWindowWhereUniqueInput;

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
    | "All_Days";

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeNullableFilter;
}

export { DiscountWindowMapWhereInput as DiscountWindowMapWhereInput };