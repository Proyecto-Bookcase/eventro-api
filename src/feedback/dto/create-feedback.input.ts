import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class CreateFeedbackInput implements Prisma.FeedbackCreateManyInput{

    event_id: string;

    assistance_id: string;

    comment: string;

    date?: Date;

    ranking?: number;

}
