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
import { RestaurantTimeWindowMapWhereUniqueInput } from "./RestaurantTimeWindowMapWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { RestaurantTimeWindowMapUpdateInput } from "./RestaurantTimeWindowMapUpdateInput";

@ArgsType()
class UpdateRestaurantTimeWindowMapArgs {
  @ApiProperty({
    required: true,
    type: () => RestaurantTimeWindowMapWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RestaurantTimeWindowMapWhereUniqueInput)
  @Field(() => RestaurantTimeWindowMapWhereUniqueInput, { nullable: false })
  where!: RestaurantTimeWindowMapWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => RestaurantTimeWindowMapUpdateInput,
  })
  @ValidateNested()
  @Type(() => RestaurantTimeWindowMapUpdateInput)
  @Field(() => RestaurantTimeWindowMapUpdateInput, { nullable: false })
  data!: RestaurantTimeWindowMapUpdateInput;
}

export { UpdateRestaurantTimeWindowMapArgs as UpdateRestaurantTimeWindowMapArgs };
