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
import {
  IsBoolean,
  IsOptional,
  ValidateNested,
  IsString,
  IsDate,
} from "class-validator";
import { MenuCategoryWhereUniqueInput } from "../../menuCategory/base/MenuCategoryWhereUniqueInput";
import { Type } from "class-transformer";
import { MenuItemCreateNestedManyWithoutMenuSubCategoriesInput } from "./MenuItemCreateNestedManyWithoutMenuSubCategoriesInput";

@InputType()
class MenuSubCategoryCreateInput {
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
    required: true,
    type: () => MenuCategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MenuCategoryWhereUniqueInput)
  @Field(() => MenuCategoryWhereUniqueInput)
  menuCategories!: MenuCategoryWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => MenuItemCreateNestedManyWithoutMenuSubCategoriesInput,
  })
  @ValidateNested()
  @Type(() => MenuItemCreateNestedManyWithoutMenuSubCategoriesInput)
  @IsOptional()
  @Field(() => MenuItemCreateNestedManyWithoutMenuSubCategoriesInput, {
    nullable: true,
  })
  menuItems?: MenuItemCreateNestedManyWithoutMenuSubCategoriesInput;

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
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt?: Date | null;
}

export { MenuSubCategoryCreateInput as MenuSubCategoryCreateInput };