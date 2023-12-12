import {Field, InputType} from '@nestjs/graphql';
import {Prisma} from '@prisma/client';

@InputType()
export class CreateNotificationInput implements Prisma.NotificationCreateManyInput {

    user_email: string;

    tittle: string;

    @Field({nullable: true})
    content?: string;

    @Field({nullable: true})
    reason?: string;

    @Field({defaultValue: Date.now()})
    date?: Date;

}
