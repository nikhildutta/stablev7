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
import { AppUserWhereUniqueInput } from "../../appUser/base/AppUserWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsInt,
  IsDate,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { RestaurantWhereUniqueInput } from "../../restaurant/base/RestaurantWhereUniqueInput";

@InputType()
class ReservationUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AppUserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AppUserWhereUniqueInput)
  @IsOptional()
  @Field(() => AppUserWhereUniqueInput, {
    nullable: true,
  })
  appUsers?: AppUserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  partySize?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  reservationDate?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  reservationTime?: Date | null;

  @ApiProperty({
    required: false,
    type: () => RestaurantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RestaurantWhereUniqueInput)
  @IsOptional()
  @Field(() => RestaurantWhereUniqueInput, {
    nullable: true,
  })
  restaurants?: RestaurantWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  status?: string | null;

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

export { ReservationUpdateInput as ReservationUpdateInput };