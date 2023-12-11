import {Prisma} from '@prisma/client';
import {CreateInscriptionInput} from './create-inscription.input';
import {InputType, PartialType} from '@nestjs/graphql';

@InputType()
export class UpdateInscriptionInput extends PartialType(CreateInscriptionInput) implements Prisma.EventUpdateManyMutationInput {}
