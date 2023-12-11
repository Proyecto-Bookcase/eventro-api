import {Field, InputType} from '@nestjs/graphql';
import {Prisma} from '@prisma/client';

@InputType()
export class CreateInscriptionInput implements Prisma.InscriptionCreateManyInput {

    @Field()
    date: Date;

    @Field()
    event_id: string;

    @Field()
    user_email: string;

}
