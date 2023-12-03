import {Field, ObjectType} from '@nestjs/graphql';
import {User} from "../../user/entities/user.entity";
import {Event} from "../../event/entities/event.entity";

@ObjectType()
export class Reward {

    @Field()
    id: string;

    @Field(type => Event)
    event: Event

    @Field(type => User)
    winner: User
}
