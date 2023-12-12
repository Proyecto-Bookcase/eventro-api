import {Field, ID, ObjectType} from '@nestjs/graphql';
import {User} from "../../user/entities/user.entity";
import {Event} from "../../event/entities/event.entity";
import {Assistance} from "../../asistance/entities/assistance.entity";

@ObjectType()
export class Inscription {

    @Field(type => ID)
    id: string;

    /**
     * Usuario que se inscribe al evento
     */
    @Field(type => User, {nullable: true})
    user: User

    /**
     * Evento al que corresponde esta inscriptión
     */
    @Field(type => Event)
    event: Event

    /**
     * Fecha de la inscripción
     */
    date: Date

    /**
     * Asistencia al evento
     */
    @Field(type => Assistance, {nullable: true})
    assistance: Assistance
}
