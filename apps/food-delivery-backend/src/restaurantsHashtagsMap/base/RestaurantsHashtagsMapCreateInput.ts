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
import { HashtagWhereUniqueInput } from "../../hashtag/base/HashtagWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { RestaurantWhereUniqueInput } from "../../restaurant/base/RestaurantWhereUniqueInput";

@InputType()
class RestaurantsHashtagsMapCreateInput {
  @ApiProperty({
    required: true,
    type: () => HashtagWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HashtagWhereUniqueInput)
  @Field(() => HashtagWhereUniqueInput)
  hashtags!: HashtagWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => RestaurantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RestaurantWhereUniqueInput)
  @Field(() => RestaurantWhereUniqueInput)
  restaurants!: RestaurantWhereUniqueInput;
}

export { RestaurantsHashtagsMapCreateInput as RestaurantsHashtagsMapCreateInput };
