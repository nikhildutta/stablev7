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
import { ContactHashtagsMap } from "../../contactHashtagsMap/base/ContactHashtagsMap";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { MenuItemsHashtagsMap } from "../../menuItemsHashtagsMap/base/MenuItemsHashtagsMap";
import { OrdersHashtagsMap } from "../../ordersHashtagsMap/base/OrdersHashtagsMap";
import { RestaurantsHashtagsMap } from "../../restaurantsHashtagsMap/base/RestaurantsHashtagsMap";
import { UsersHashtagsMap } from "../../usersHashtagsMap/base/UsersHashtagsMap";

@ObjectType()
class Hashtag {
  @ApiProperty({
    required: false,
    type: () => [ContactHashtagsMap],
  })
  @ValidateNested()
  @Type(() => ContactHashtagsMap)
  @IsOptional()
  contactHashtagsMap?: Array<ContactHashtagsMap>;

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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  hashText!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [MenuItemsHashtagsMap],
  })
  @ValidateNested()
  @Type(() => MenuItemsHashtagsMap)
  @IsOptional()
  menuItemsHashtagsMap?: Array<MenuItemsHashtagsMap>;

  @ApiProperty({
    required: false,
    type: () => [OrdersHashtagsMap],
  })
  @ValidateNested()
  @Type(() => OrdersHashtagsMap)
  @IsOptional()
  ordersHashtagsMap?: Array<OrdersHashtagsMap>;

  @ApiProperty({
    required: false,
    type: () => [RestaurantsHashtagsMap],
  })
  @ValidateNested()
  @Type(() => RestaurantsHashtagsMap)
  @IsOptional()
  restaurantsHashtagsMap?: Array<RestaurantsHashtagsMap>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  tag!: string | null;

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

  @ApiProperty({
    required: false,
    type: () => [UsersHashtagsMap],
  })
  @ValidateNested()
  @Type(() => UsersHashtagsMap)
  @IsOptional()
  usersHashtagsMap?: Array<UsersHashtagsMap>;
}

export { Hashtag as Hashtag };