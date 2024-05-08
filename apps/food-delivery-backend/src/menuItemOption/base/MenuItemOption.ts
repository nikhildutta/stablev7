/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  IsOptional,
  IsDate,
  IsString,
  IsBoolean,
  ValidateNested,
} from "class-validator";
import { Decimal } from "decimal.js";
import { Type } from "class-transformer";
import { MenuItemsOptionsGroup } from "../../menuItemsOptionsGroup/base/MenuItemsOptionsGroup";
import { OptionsVarientsGroup } from "../../optionsVarientsGroup/base/OptionsVarientsGroup";

@ObjectType()
class MenuItemOption {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  additionalPrice!: Decimal | null;

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
  description!: string | null;

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
  isDefault!: boolean | null;

  @ApiProperty({
    required: true,
    type: () => MenuItemsOptionsGroup,
  })
  @ValidateNested()
  @Type(() => MenuItemsOptionsGroup)
  menuItemsOptionsGroups?: MenuItemsOptionsGroup;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  optionImageUrl!: string | null;

  @ApiProperty({
    required: false,
    type: () => [OptionsVarientsGroup],
  })
  @ValidateNested()
  @Type(() => OptionsVarientsGroup)
  @IsOptional()
  optionsVarientsGroup?: Array<OptionsVarientsGroup>;

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

export { MenuItemOption as MenuItemOption };