import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateNested } from "class-validator";
import { GroupWhereUniqueInput } from "../../group/base/GroupWhereUniqueInput";
import { Type } from "class-transformer";
@InputType()
class ProjectCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  gitlabProjects!: string;

  @ApiProperty({
    required: true,
    type: () => GroupWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GroupWhereUniqueInput)
  @Field(() => GroupWhereUniqueInput)
  group!: GroupWhereUniqueInput;
}
export { ProjectCreateInput };
