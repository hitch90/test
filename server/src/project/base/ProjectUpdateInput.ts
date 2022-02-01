import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { GroupWhereUniqueInput } from "../../group/base/GroupWhereUniqueInput";
import { Type } from "class-transformer";
@InputType()
class ProjectUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  gitlabProjects?: string;

  @ApiProperty({
    required: false,
    type: () => GroupWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GroupWhereUniqueInput)
  @IsOptional()
  @Field(() => GroupWhereUniqueInput, {
    nullable: true,
  })
  group?: GroupWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;
}
export { ProjectUpdateInput };
