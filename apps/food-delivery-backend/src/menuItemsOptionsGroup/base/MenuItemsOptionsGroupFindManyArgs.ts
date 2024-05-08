/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuItemsOptionsGroupWhereInput } from "./MenuItemsOptionsGroupWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MenuItemsOptionsGroupOrderByInput } from "./MenuItemsOptionsGroupOrderByInput";

@ArgsType()
class MenuItemsOptionsGroupFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MenuItemsOptionsGroupWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MenuItemsOptionsGroupWhereInput, { nullable: true })
  @Type(() => MenuItemsOptionsGroupWhereInput)
  where?: MenuItemsOptionsGroupWhereInput;

  @ApiProperty({
    required: false,
    type: [MenuItemsOptionsGroupOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MenuItemsOptionsGroupOrderByInput], { nullable: true })
  @Type(() => MenuItemsOptionsGroupOrderByInput)
  orderBy?: Array<MenuItemsOptionsGroupOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { MenuItemsOptionsGroupFindManyArgs as MenuItemsOptionsGroupFindManyArgs };