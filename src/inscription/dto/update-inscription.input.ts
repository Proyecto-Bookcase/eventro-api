import { CreateInscriptionInput } from './create-inscription.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInscriptionInput extends PartialType(CreateInscriptionInput) {
  @Field(() => Int)
  id: number;
}
