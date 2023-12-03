import {Field, ObjectType} from '@nestjs/graphql';
import {User} from "../../user/entities/user.entity";
import {Event} from "../../event/entities/event.entity";
import {Assistance} from "../../asistance/entities/assistance.entity";

@ObjectType()
export class Inscription {

    @Field()
    id: string;

    @Field(type => User)
    user: User

    @Field(type => Event)
    event: Event

    @Field()
    date: Date

    @Field(type => Assistance, {nullable: true})
    assistance: Assistance
}
