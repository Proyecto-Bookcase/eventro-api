import {Field, ID, ObjectType,} from '@nestjs/graphql';
import {Inscription} from "../../inscription/entities/inscription.entity";
import {Reward} from "../../reward/entities/reward.entity";
import {Event} from "../../event/entities/event.entity";

@ObjectType()
export class User {

    @Field(type => ID)
    id: string

    @Field()
    name: string

    @Field()
    email: string

    @Field()
    password: string

    @Field(() => [Event], {nullable: "items"})
    events: Event[]

    @Field(() => [Inscription], {nullable: "items"})
    inscriptions: Inscription[]

    @Field(() => [Reward], {nullable: "items"})
    rewards: Reward[]
}
