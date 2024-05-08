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
import { OptionsVarientsItemWhereInput } from "./OptionsVarientsItemWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { OptionsVarientsItemOrderByInput } from "./OptionsVarientsItemOrderByInput";

@ArgsType()
class OptionsVarientsItemFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => OptionsVarientsItemWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => OptionsVarientsItemWhereInput, { nullable: true })
  @Type(() => OptionsVarientsItemWhereInput)
  where?: OptionsVarientsItemWhereInput;

  @ApiProperty({
    required: false,
    type: [OptionsVarientsItemOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [OptionsVarientsItemOrderByInput], { nullable: true })
  @Type(() => OptionsVarientsItemOrderByInput)
  orderBy?: Array<OptionsVarientsItemOrderByInput>;

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

export { OptionsVarientsItemFindManyArgs as OptionsVarientsItemFindManyArgs };