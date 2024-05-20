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
import { ComboGroupWhereInput } from "./ComboGroupWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ComboGroupOrderByInput } from "./ComboGroupOrderByInput";

@ArgsType()
class ComboGroupFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ComboGroupWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ComboGroupWhereInput, { nullable: true })
  @Type(() => ComboGroupWhereInput)
  where?: ComboGroupWhereInput;

  @ApiProperty({
    required: false,
    type: [ComboGroupOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ComboGroupOrderByInput], { nullable: true })
  @Type(() => ComboGroupOrderByInput)
  orderBy?: Array<ComboGroupOrderByInput>;

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

export { ComboGroupFindManyArgs as ComboGroupFindManyArgs };
