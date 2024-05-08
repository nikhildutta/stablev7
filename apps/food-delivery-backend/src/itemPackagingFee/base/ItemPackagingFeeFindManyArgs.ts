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
import { ItemPackagingFeeWhereInput } from "./ItemPackagingFeeWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ItemPackagingFeeOrderByInput } from "./ItemPackagingFeeOrderByInput";

@ArgsType()
class ItemPackagingFeeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ItemPackagingFeeWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ItemPackagingFeeWhereInput, { nullable: true })
  @Type(() => ItemPackagingFeeWhereInput)
  where?: ItemPackagingFeeWhereInput;

  @ApiProperty({
    required: false,
    type: [ItemPackagingFeeOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ItemPackagingFeeOrderByInput], { nullable: true })
  @Type(() => ItemPackagingFeeOrderByInput)
  orderBy?: Array<ItemPackagingFeeOrderByInput>;

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

export { ItemPackagingFeeFindManyArgs as ItemPackagingFeeFindManyArgs };