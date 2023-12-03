import { CreateAssistanceInput } from './create-assistance.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAssistanceInput extends PartialType(CreateAssistanceInput) {
  @Field(() => Int)
  id: number;
}
