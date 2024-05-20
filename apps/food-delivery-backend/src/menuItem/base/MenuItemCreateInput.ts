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
  IsInt,
  IsOptional,
  IsNumber,
  IsBoolean,
  ValidateNested,
  IsString,
  IsDate,
} from "class-validator";
import { Decimal } from "decimal.js";
import { DailyMenuItemStockCreateNestedManyWithoutMenuItemsInput } from "./DailyMenuItemStockCreateNestedManyWithoutMenuItemsInput";
import { Type } from "class-transformer";
import { DiscountMenuItemCreateNestedManyWithoutMenuItemsInput } from "./DiscountMenuItemCreateNestedManyWithoutMenuItemsInput";
import { FavouriteMenuItemCreateNestedManyWithoutMenuItemsInput } from "./FavouriteMenuItemCreateNestedManyWithoutMenuItemsInput";
import { ItemPackagingFeeCreateNestedManyWithoutMenuItemsInput } from "./ItemPackagingFeeCreateNestedManyWithoutMenuItemsInput";
import { MenuItemIngredientCreateNestedManyWithoutMenuItemsInput } from "./MenuItemIngredientCreateNestedManyWithoutMenuItemsInput";
import { MenuItemsHashtagsMapCreateNestedManyWithoutMenuItemsInput } from "./MenuItemsHashtagsMapCreateNestedManyWithoutMenuItemsInput";
import { MenuItemsOptionsGroupCreateNestedManyWithoutMenuItemsInput } from "./MenuItemsOptionsGroupCreateNestedManyWithoutMenuItemsInput";
import { MenuItemsWindowMapCreateNestedManyWithoutMenuItemsInput } from "./MenuItemsWindowMapCreateNestedManyWithoutMenuItemsInput";
import { MenuSubCategoryWhereUniqueInput } from "../../menuSubCategory/base/MenuSubCategoryWhereUniqueInput";

@InputType()
class MenuItemCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  availableQuantity?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  basePrice?: Decimal | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  containsEgg?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => DailyMenuItemStockCreateNestedManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => DailyMenuItemStockCreateNestedManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => DailyMenuItemStockCreateNestedManyWithoutMenuItemsInput, {
    nullable: true,
  })
  dailyMenuItemStock?: DailyMenuItemStockCreateNestedManyWithoutMenuItemsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => DiscountMenuItemCreateNestedManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => DiscountMenuItemCreateNestedManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => DiscountMenuItemCreateNestedManyWithoutMenuItemsInput, {
    nullable: true,
  })
  discountMenuItem?: DiscountMenuItemCreateNestedManyWithoutMenuItemsInput;

  @ApiProperty({
    required: false,
    type: () => FavouriteMenuItemCreateNestedManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => FavouriteMenuItemCreateNestedManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => FavouriteMenuItemCreateNestedManyWithoutMenuItemsInput, {
    nullable: true,
  })
  favouriteMenuItems?: FavouriteMenuItemCreateNestedManyWithoutMenuItemsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  imageUrl?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  ingredients?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isActive?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isDeliverable?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isDineinAvailable?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isLimitedStock?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isPickup?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isVegetarian?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => ItemPackagingFeeCreateNestedManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => ItemPackagingFeeCreateNestedManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => ItemPackagingFeeCreateNestedManyWithoutMenuItemsInput, {
    nullable: true,
  })
  itemPackagingFee?: ItemPackagingFeeCreateNestedManyWithoutMenuItemsInput;

  @ApiProperty({
    required: false,
    type: () => MenuItemIngredientCreateNestedManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => MenuItemIngredientCreateNestedManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => MenuItemIngredientCreateNestedManyWithoutMenuItemsInput, {
    nullable: true,
  })
  menuItemIngredients?: MenuItemIngredientCreateNestedManyWithoutMenuItemsInput;

  @ApiProperty({
    required: false,
    type: () => MenuItemsHashtagsMapCreateNestedManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => MenuItemsHashtagsMapCreateNestedManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => MenuItemsHashtagsMapCreateNestedManyWithoutMenuItemsInput, {
    nullable: true,
  })
  menuItemsHashtagsMap?: MenuItemsHashtagsMapCreateNestedManyWithoutMenuItemsInput;

  @ApiProperty({
    required: false,
    type: () => MenuItemsOptionsGroupCreateNestedManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => MenuItemsOptionsGroupCreateNestedManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => MenuItemsOptionsGroupCreateNestedManyWithoutMenuItemsInput, {
    nullable: true,
  })
  menuItemsOptionsGroups?: MenuItemsOptionsGroupCreateNestedManyWithoutMenuItemsInput;

  @ApiProperty({
    required: false,
    type: () => MenuItemsWindowMapCreateNestedManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => MenuItemsWindowMapCreateNestedManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => MenuItemsWindowMapCreateNestedManyWithoutMenuItemsInput, {
    nullable: true,
  })
  menuItemsWindowMap?: MenuItemsWindowMapCreateNestedManyWithoutMenuItemsInput;

  @ApiProperty({
    required: true,
    type: () => MenuSubCategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MenuSubCategoryWhereUniqueInput)
  @Field(() => MenuSubCategoryWhereUniqueInput)
  menuSubCategories!: MenuSubCategoryWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  preparationTime?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  shareSlug?: string | null;

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

export { MenuItemCreateInput as MenuItemCreateInput };
