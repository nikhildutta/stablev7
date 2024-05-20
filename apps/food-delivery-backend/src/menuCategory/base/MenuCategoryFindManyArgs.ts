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
import { MenuCategoryWhereInput } from "./MenuCategoryWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MenuCategoryOrderByInput } from "./MenuCategoryOrderByInput";

@ArgsType()
class MenuCategoryFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MenuCategoryWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MenuCategoryWhereInput, { nullable: true })
  @Type(() => MenuCategoryWhereInput)
  where?: MenuCategoryWhereInput;

  @ApiProperty({
    required: false,
    type: [MenuCategoryOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MenuCategoryOrderByInput], { nullable: true })
  @Type(() => MenuCategoryOrderByInput)
  orderBy?: Array<MenuCategoryOrderByInput>;

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

export { MenuCategoryFindManyArgs as MenuCategoryFindManyArgs };
