import {Field, GraphQLISODateTime, ObjectType} from '@nestjs/graphql';
import {GraphQLString} from "graphql/type";
import {User} from "../../user/entities/user.entity";
import {Inscription} from "../../inscription/entities/inscription.entity";
import {Reward} from "../../reward/entities/reward.entity";

@ObjectType()
export class Event {

    @Field()
    id: string;

    @Field(type => User)
    organizer: User;

    @Field()
    name: string;

    @Field({nullable: true})
    description: string;

    @Field(() => Date)
    date: Date;

    @Field()
    location: string;

    @Field(() => [Inscription], {nullable: "items"})
    inscriptions: Inscription[];

    @Field(() => [Reward],{nullable: "items"})
    rewards: Reward[];
}
