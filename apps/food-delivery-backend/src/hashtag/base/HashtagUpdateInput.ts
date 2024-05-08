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
import { ContactHashtagsMapUpdateManyWithoutHashtagsInput } from "./ContactHashtagsMapUpdateManyWithoutHashtagsInput";
import { ValidateNested, IsOptional, IsString, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { MenuItemsHashtagsMapUpdateManyWithoutHashtagsInput } from "./MenuItemsHashtagsMapUpdateManyWithoutHashtagsInput";
import { OrdersHashtagsMapUpdateManyWithoutHashtagsInput } from "./OrdersHashtagsMapUpdateManyWithoutHashtagsInput";
import { RestaurantsHashtagsMapUpdateManyWithoutHashtagsInput } from "./RestaurantsHashtagsMapUpdateManyWithoutHashtagsInput";
import { UsersHashtagsMapUpdateManyWithoutHashtagsInput } from "./UsersHashtagsMapUpdateManyWithoutHashtagsInput";

@InputType()
class HashtagUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ContactHashtagsMapUpdateManyWithoutHashtagsInput,
  })
  @ValidateNested()
  @Type(() => ContactHashtagsMapUpdateManyWithoutHashtagsInput)
  @IsOptional()
  @Field(() => ContactHashtagsMapUpdateManyWithoutHashtagsInput, {
    nullable: true,
  })
  contactHashtagsMap?: ContactHashtagsMapUpdateManyWithoutHashtagsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  hashText?: string | null;

  @ApiProperty({
    required: false,
    type: () => MenuItemsHashtagsMapUpdateManyWithoutHashtagsInput,
  })
  @ValidateNested()
  @Type(() => MenuItemsHashtagsMapUpdateManyWithoutHashtagsInput)
  @IsOptional()
  @Field(() => MenuItemsHashtagsMapUpdateManyWithoutHashtagsInput, {
    nullable: true,
  })
  menuItemsHashtagsMap?: MenuItemsHashtagsMapUpdateManyWithoutHashtagsInput;

  @ApiProperty({
    required: false,
    type: () => OrdersHashtagsMapUpdateManyWithoutHashtagsInput,
  })
  @ValidateNested()
  @Type(() => OrdersHashtagsMapUpdateManyWithoutHashtagsInput)
  @IsOptional()
  @Field(() => OrdersHashtagsMapUpdateManyWithoutHashtagsInput, {
    nullable: true,
  })
  ordersHashtagsMap?: OrdersHashtagsMapUpdateManyWithoutHashtagsInput;

  @ApiProperty({
    required: false,
    type: () => RestaurantsHashtagsMapUpdateManyWithoutHashtagsInput,
  })
  @ValidateNested()
  @Type(() => RestaurantsHashtagsMapUpdateManyWithoutHashtagsInput)
  @IsOptional()
  @Field(() => RestaurantsHashtagsMapUpdateManyWithoutHashtagsInput, {
    nullable: true,
  })
  restaurantsHashtagsMap?: RestaurantsHashtagsMapUpdateManyWithoutHashtagsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  tag?: string | null;

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
    type: () => UsersHashtagsMapUpdateManyWithoutHashtagsInput,
  })
  @ValidateNested()
  @Type(() => UsersHashtagsMapUpdateManyWithoutHashtagsInput)
  @IsOptional()
  @Field(() => UsersHashtagsMapUpdateManyWithoutHashtagsInput, {
    nullable: true,
  })
  usersHashtagsMap?: UsersHashtagsMapUpdateManyWithoutHashtagsInput;
}

export { HashtagUpdateInput as HashtagUpdateInput };
