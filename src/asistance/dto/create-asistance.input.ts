import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAsistanceInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
