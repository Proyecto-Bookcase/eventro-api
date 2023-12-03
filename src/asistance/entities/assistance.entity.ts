import {Field, ID, ObjectType} from '@nestjs/graphql';
import {Inscription} from "../../inscription/entities/inscription.entity";

@ObjectType()
export class Assistance {

    @Field(type => ID)
    id: string;

    @Field(type => Inscription)
    inscription: Inscription

    @Field()
    date: Date
}
