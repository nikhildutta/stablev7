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
import { ContactDetailWhereInput } from "./ContactDetailWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ContactDetailCountArgs {
  @ApiProperty({
    required: false,
    type: () => ContactDetailWhereInput,
  })
  @Field(() => ContactDetailWhereInput, { nullable: true })
  @Type(() => ContactDetailWhereInput)
  where?: ContactDetailWhereInput;
}

export { ContactDetailCountArgs as ContactDetailCountArgs };
