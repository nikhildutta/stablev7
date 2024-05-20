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
import { RestaurantsHashtagsMapWhereInput } from "./RestaurantsHashtagsMapWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RestaurantsHashtagsMapOrderByInput } from "./RestaurantsHashtagsMapOrderByInput";

@ArgsType()
class RestaurantsHashtagsMapFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RestaurantsHashtagsMapWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RestaurantsHashtagsMapWhereInput, { nullable: true })
  @Type(() => RestaurantsHashtagsMapWhereInput)
  where?: RestaurantsHashtagsMapWhereInput;

  @ApiProperty({
    required: false,
    type: [RestaurantsHashtagsMapOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RestaurantsHashtagsMapOrderByInput], { nullable: true })
  @Type(() => RestaurantsHashtagsMapOrderByInput)
  orderBy?: Array<RestaurantsHashtagsMapOrderByInput>;

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

export { RestaurantsHashtagsMapFindManyArgs as RestaurantsHashtagsMapFindManyArgs };
