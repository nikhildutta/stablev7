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
import { TimeWindowWhereInput } from "./TimeWindowWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class TimeWindowCountArgs {
  @ApiProperty({
    required: false,
    type: () => TimeWindowWhereInput,
  })
  @Field(() => TimeWindowWhereInput, { nullable: true })
  @Type(() => TimeWindowWhereInput)
  where?: TimeWindowWhereInput;
}

export { TimeWindowCountArgs as TimeWindowCountArgs };
