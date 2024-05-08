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
import { ContactHashtagsMapListRelationFilter } from "../../contactHashtagsMap/base/ContactHashtagsMapListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MenuItemsHashtagsMapListRelationFilter } from "../../menuItemsHashtagsMap/base/MenuItemsHashtagsMapListRelationFilter";
import { OrdersHashtagsMapListRelationFilter } from "../../ordersHashtagsMap/base/OrdersHashtagsMapListRelationFilter";
import { RestaurantsHashtagsMapListRelationFilter } from "../../restaurantsHashtagsMap/base/RestaurantsHashtagsMapListRelationFilter";
import { UsersHashtagsMapListRelationFilter } from "../../usersHashtagsMap/base/UsersHashtagsMapListRelationFilter";

@InputType()
class HashtagWhereInput {
  @ApiProperty({
    required: false,
    type: () => ContactHashtagsMapListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ContactHashtagsMapListRelationFilter)
  @IsOptional()
  @Field(() => ContactHashtagsMapListRelationFilter, {
    nullable: true,
  })
  contactHashtagsMap?: ContactHashtagsMapListRelationFilter;

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
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  hashText?: StringNullableFilter;

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
    type: () => MenuItemsHashtagsMapListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MenuItemsHashtagsMapListRelationFilter)
  @IsOptional()
  @Field(() => MenuItemsHashtagsMapListRelationFilter, {
    nullable: true,
  })
  menuItemsHashtagsMap?: MenuItemsHashtagsMapListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => OrdersHashtagsMapListRelationFilter,
  })
  @ValidateNested()
  @Type(() => OrdersHashtagsMapListRelationFilter)
  @IsOptional()
  @Field(() => OrdersHashtagsMapListRelationFilter, {
    nullable: true,
  })
  ordersHashtagsMap?: OrdersHashtagsMapListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => RestaurantsHashtagsMapListRelationFilter,
  })
  @ValidateNested()
  @Type(() => RestaurantsHashtagsMapListRelationFilter)
  @IsOptional()
  @Field(() => RestaurantsHashtagsMapListRelationFilter, {
    nullable: true,
  })
  restaurantsHashtagsMap?: RestaurantsHashtagsMapListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  tag?: StringNullableFilter;

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

  @ApiProperty({
    required: false,
    type: () => UsersHashtagsMapListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UsersHashtagsMapListRelationFilter)
  @IsOptional()
  @Field(() => UsersHashtagsMapListRelationFilter, {
    nullable: true,
  })
  usersHashtagsMap?: UsersHashtagsMapListRelationFilter;
}

export { HashtagWhereInput as HashtagWhereInput };