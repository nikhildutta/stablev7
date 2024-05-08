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
import { RestaurantPreferenceWhereUniqueInput } from "./RestaurantPreferenceWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { RestaurantPreferenceUpdateInput } from "./RestaurantPreferenceUpdateInput";

@ArgsType()
class UpdateRestaurantPreferenceArgs {
  @ApiProperty({
    required: true,
    type: () => RestaurantPreferenceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RestaurantPreferenceWhereUniqueInput)
  @Field(() => RestaurantPreferenceWhereUniqueInput, { nullable: false })
  where!: RestaurantPreferenceWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => RestaurantPreferenceUpdateInput,
  })
  @ValidateNested()
  @Type(() => RestaurantPreferenceUpdateInput)
  @Field(() => RestaurantPreferenceUpdateInput, { nullable: false })
  data!: RestaurantPreferenceUpdateInput;
}

export { UpdateRestaurantPreferenceArgs as UpdateRestaurantPreferenceArgs };