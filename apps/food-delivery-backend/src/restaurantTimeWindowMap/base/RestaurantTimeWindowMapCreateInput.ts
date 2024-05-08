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
import { EnumRestaurantTimeWindowMapDayOfTheWeek } from "./EnumRestaurantTimeWindowMapDayOfTheWeek";
import { IsEnum, IsOptional, ValidateNested, IsDate } from "class-validator";
import { RestaurantWhereUniqueInput } from "../../restaurant/base/RestaurantWhereUniqueInput";
import { Type } from "class-transformer";
import { TimeWindowWhereUniqueInput } from "../../timeWindow/base/TimeWindowWhereUniqueInput";

@InputType()
class RestaurantTimeWindowMapCreateInput {
  @ApiProperty({
    required: false,
    enum: EnumRestaurantTimeWindowMapDayOfTheWeek,
  })
  @IsEnum(EnumRestaurantTimeWindowMapDayOfTheWeek)
  @IsOptional()
  @Field(() => EnumRestaurantTimeWindowMapDayOfTheWeek, {
    nullable: true,
  })
  day_of_the_week?:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday"
    | null;

  @ApiProperty({
    required: true,
    type: () => RestaurantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RestaurantWhereUniqueInput)
  @Field(() => RestaurantWhereUniqueInput)
  restaurants!: RestaurantWhereUniqueInput;

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
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt?: Date | null;
}

export { RestaurantTimeWindowMapCreateInput as RestaurantTimeWindowMapCreateInput };
