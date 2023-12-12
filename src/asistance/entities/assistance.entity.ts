import {Field, ID, ObjectType} from '@nestjs/graphql';
import {Inscription} from "../../inscription/entities/inscription.entity";

@ObjectType()
export class Assistance {

    @Field(() => ID)
    id: string;

    /**
     * Fecha de asistencia al evento
     */
    date: Date;

    /**
     * Inscripción a la cual esta asistencia está asociada
     */
    @Field(() => Inscription)
    inscription: Inscription;
}
