import { Prisma } from '@prisma/client';
import { CreateInscriptionInput } from './create-inscription.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInscriptionInput extends PartialType(CreateInscriptionInput) {

}
