/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ComplaintsPhotoWhereUniqueInput } from "../../complaintsPhoto/base/ComplaintsPhotoWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ComplaintsPhotoUpdateManyWithoutComplaintsBooksInput {
  @Field(() => [ComplaintsPhotoWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ComplaintsPhotoWhereUniqueInput],
  })
  connect?: Array<ComplaintsPhotoWhereUniqueInput>;

  @Field(() => [ComplaintsPhotoWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ComplaintsPhotoWhereUniqueInput],
  })
  disconnect?: Array<ComplaintsPhotoWhereUniqueInput>;

  @Field(() => [ComplaintsPhotoWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ComplaintsPhotoWhereUniqueInput],
  })
  set?: Array<ComplaintsPhotoWhereUniqueInput>;
}

export { ComplaintsPhotoUpdateManyWithoutComplaintsBooksInput as ComplaintsPhotoUpdateManyWithoutComplaintsBooksInput };