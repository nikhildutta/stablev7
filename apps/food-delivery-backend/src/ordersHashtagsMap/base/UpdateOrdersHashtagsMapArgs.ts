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
import { OrdersHashtagsMapWhereUniqueInput } from "./OrdersHashtagsMapWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { OrdersHashtagsMapUpdateInput } from "./OrdersHashtagsMapUpdateInput";

@ArgsType()
class UpdateOrdersHashtagsMapArgs {
  @ApiProperty({
    required: true,
    type: () => OrdersHashtagsMapWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrdersHashtagsMapWhereUniqueInput)
  @Field(() => OrdersHashtagsMapWhereUniqueInput, { nullable: false })
  where!: OrdersHashtagsMapWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => OrdersHashtagsMapUpdateInput,
  })
  @ValidateNested()
  @Type(() => OrdersHashtagsMapUpdateInput)
  @Field(() => OrdersHashtagsMapUpdateInput, { nullable: false })
  data!: OrdersHashtagsMapUpdateInput;
}

export { UpdateOrdersHashtagsMapArgs as UpdateOrdersHashtagsMapArgs };
