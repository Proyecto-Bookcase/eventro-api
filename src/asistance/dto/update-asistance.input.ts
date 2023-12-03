import { CreateAsistanceInput } from './create-asistance.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAsistanceInput extends PartialType(CreateAsistanceInput) {
  @Field(() => Int)
  id: number;
}
