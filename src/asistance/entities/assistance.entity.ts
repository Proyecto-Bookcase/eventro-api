import {Field, ID, ObjectType} from '@nestjs/graphql';
import {Inscription} from "../../inscription/entities/inscription.entity";

@ObjectType()
export class Assistance {

    /**
     * Id del Asistente
     */
    @Field(type => ID)
    id: string;

    inscription: Inscription

    /**
     * aaa
     */
    date: Date
}
