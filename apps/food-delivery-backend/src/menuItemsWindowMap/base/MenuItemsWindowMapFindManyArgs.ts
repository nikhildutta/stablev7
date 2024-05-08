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
import { MenuItemsWindowMapWhereInput } from "./MenuItemsWindowMapWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MenuItemsWindowMapOrderByInput } from "./MenuItemsWindowMapOrderByInput";

@ArgsType()
class MenuItemsWindowMapFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MenuItemsWindowMapWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MenuItemsWindowMapWhereInput, { nullable: true })
  @Type(() => MenuItemsWindowMapWhereInput)
  where?: MenuItemsWindowMapWhereInput;

  @ApiProperty({
    required: false,
    type: [MenuItemsWindowMapOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MenuItemsWindowMapOrderByInput], { nullable: true })
  @Type(() => MenuItemsWindowMapOrderByInput)
  orderBy?: Array<MenuItemsWindowMapOrderByInput>;

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

export { MenuItemsWindowMapFindManyArgs as MenuItemsWindowMapFindManyArgs };
