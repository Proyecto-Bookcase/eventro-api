import {Field, ID, ObjectType} from '@nestjs/graphql';
import {Event} from "../../event/entities/event.entity";

@ObjectType()
export class Category {

    @Field(() => ID)
    name: string

    @Field(() => [Event])
    events: Event[]

}
