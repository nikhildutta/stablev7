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
import { MenuItemsWindowMapWhereInput } from "./MenuItemsWindowMapWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MenuItemsWindowMapListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MenuItemsWindowMapWhereInput,
  })
  @ValidateNested()
  @Type(() => MenuItemsWindowMapWhereInput)
  @IsOptional()
  @Field(() => MenuItemsWindowMapWhereInput, {
    nullable: true,
  })
  every?: MenuItemsWindowMapWhereInput;

  @ApiProperty({
    required: false,
    type: () => MenuItemsWindowMapWhereInput,
  })
  @ValidateNested()
  @Type(() => MenuItemsWindowMapWhereInput)
  @IsOptional()
  @Field(() => MenuItemsWindowMapWhereInput, {
    nullable: true,
  })
  some?: MenuItemsWindowMapWhereInput;

  @ApiProperty({
    required: false,
    type: () => MenuItemsWindowMapWhereInput,
  })
  @ValidateNested()
  @Type(() => MenuItemsWindowMapWhereInput)
  @IsOptional()
  @Field(() => MenuItemsWindowMapWhereInput, {
    nullable: true,
  })
  none?: MenuItemsWindowMapWhereInput;
}
export { MenuItemsWindowMapListRelationFilter as MenuItemsWindowMapListRelationFilter };