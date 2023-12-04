import {Field, ID, InputType} from '@nestjs/graphql';
import {Prisma} from '@prisma/client';

@InputType()
export class CreateAssistanceInput implements Partial<Prisma.AssistanceCreateInput> {

    @Field()
    date: Date;

    @Field()
    inscription_id: string;

}
