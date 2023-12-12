import {Field, ID, ObjectType} from '@nestjs/graphql';
import {User} from "../../user/entities/user.entity";

@ObjectType()
export class Notification {

    @Field(() => ID)
    id: string

    tittle: string

    @Field({nullable: true})
    content?: string

    @Field({nullable: true})
    reason?: string

    @Field({defaultValue: Date.now()})
    date: Date

    @Field(() => User)
    user: User

}
