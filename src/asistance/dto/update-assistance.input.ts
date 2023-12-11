import {Prisma} from '@prisma/client';
import {InputType, PartialType} from '@nestjs/graphql';
import {CreateAssistanceInput} from "./create-assistance.input";

@InputType()
export class UpdateAssistanceInput extends PartialType(CreateAssistanceInput) implements Prisma.AssistanceUpdateManyMutationInput {
}
