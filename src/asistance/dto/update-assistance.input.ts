import {Prisma} from '@prisma/client';
import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class UpdateAssistanceInput implements Prisma.AssistanceUpdateInput {

    @Field()
    date: Date

    @Field()
    inscription_id: string

}
