import {Field, ID, ObjectType} from '@nestjs/graphql';
import {Event} from "../../../event/entities/event.entity";

@ObjectType()
export class Role {

    @Field(() => ID)
    id: string

    name: string

    @Field(() => [Event])
    events: Event

}
