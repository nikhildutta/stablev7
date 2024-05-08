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
import { ComboItemWindowMapListRelationFilter } from "../../comboItemWindowMap/base/ComboItemWindowMapListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { DiscountWindowMapListRelationFilter } from "../../discountWindowMap/base/DiscountWindowMapListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { MenuItemsWindowMapListRelationFilter } from "../../menuItemsWindowMap/base/MenuItemsWindowMapListRelationFilter";
import { RestaurantTimeWindowMapListRelationFilter } from "../../restaurantTimeWindowMap/base/RestaurantTimeWindowMapListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

@InputType()
class TimeWindowWhereInput {
  @ApiProperty({
    required: false,
    type: () => ComboItemWindowMapListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ComboItemWindowMapListRelationFilter)
  @IsOptional()
  @Field(() => ComboItemWindowMapListRelationFilter, {
    nullable: true,
  })
  comboItemWindowMap?: ComboItemWindowMapListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => DiscountWindowMapListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DiscountWindowMapListRelationFilter)
  @IsOptional()
  @Field(() => DiscountWindowMapListRelationFilter, {
    nullable: true,
  })
  discountWindowMap?: DiscountWindowMapListRelationFilter;

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
    type: () => MenuItemsWindowMapListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MenuItemsWindowMapListRelationFilter)
  @IsOptional()
  @Field(() => MenuItemsWindowMapListRelationFilter, {
    nullable: true,
  })
  menuItemsWindowMap?: MenuItemsWindowMapListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => RestaurantTimeWindowMapListRelationFilter,
  })
  @ValidateNested()
  @Type(() => RestaurantTimeWindowMapListRelationFilter)
  @IsOptional()
  @Field(() => RestaurantTimeWindowMapListRelationFilter, {
    nullable: true,
  })
  restaurantTimeWindowMap?: RestaurantTimeWindowMapListRelationFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  windowEnd?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  windowStart?: DateTimeNullableFilter;
}

export { TimeWindowWhereInput as TimeWindowWhereInput };