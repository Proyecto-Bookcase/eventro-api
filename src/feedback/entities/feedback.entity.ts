import {Field, ID, Int, ObjectType} from '@nestjs/graphql';
import {Event} from "../../event/entities/event.entity";
import {Assistance} from "../../asistance/entities/assistance.entity";

@ObjectType()
export class Feedback {

    @Field(() => ID)
    id: string

    /**
     * Comentario del Feedback
     */
    comment: string

    /**
     * Fecha en que se hizo el Feedback
     */
    date: Date

    /**
     * Valoración del Evento
     */
    @Field(() => Int, {nullable: true})
    ranking?: number

    /**
     * Evento
     */
    @Field(() => Event)
    event: Event

    /**
     * Asistencia del usuario que hizo el Feedback
     */
    @Field(() => Assistance)
    assistance: Assistance
}
