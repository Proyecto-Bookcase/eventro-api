import { Prisma } from '@prisma/client';
import { CreateFeedbackInput } from './create-feedback.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFeedbackInput extends PartialType(CreateFeedbackInput) implements Prisma.FeedbackUpdateManyMutationInput{
}
