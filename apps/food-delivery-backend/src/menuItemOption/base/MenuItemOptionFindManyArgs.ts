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
import { MenuItemOptionWhereInput } from "./MenuItemOptionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MenuItemOptionOrderByInput } from "./MenuItemOptionOrderByInput";

@ArgsType()
class MenuItemOptionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MenuItemOptionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MenuItemOptionWhereInput, { nullable: true })
  @Type(() => MenuItemOptionWhereInput)
  where?: MenuItemOptionWhereInput;

  @ApiProperty({
    required: false,
    type: [MenuItemOptionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MenuItemOptionOrderByInput], { nullable: true })
  @Type(() => MenuItemOptionOrderByInput)
  orderBy?: Array<MenuItemOptionOrderByInput>;

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

export { MenuItemOptionFindManyArgs as MenuItemOptionFindManyArgs };