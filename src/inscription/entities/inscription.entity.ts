import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Inscription {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
