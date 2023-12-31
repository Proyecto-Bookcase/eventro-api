import { Prisma } from '@prisma/client';
import {CreateEventInput} from './create-event.input';
import {InputType, PartialType} from '@nestjs/graphql';

@InputType()
export class UpdateEventInput extends PartialType(CreateEventInput) implements Prisma.AssistanceUpdateManyMutationInput{

}
