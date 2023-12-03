import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateInscriptionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
