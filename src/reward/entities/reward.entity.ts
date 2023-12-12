import {Field, ID, ObjectType} from '@nestjs/graphql';
import {Assistance} from "../../asistance/entities/assistance.entity";

@ObjectType()
export class Reward {

    @Field(type => ID)
    id: string;

    /**
     * Nombre del Premio
     */
    @Field({nullable: true})
    name?: string

    /**
     * Descripción del Premio
     */
    @Field({nullable: true})
    description?: string

    /**
     * Asistencia del Ganador del Premio
     */
    @Field(() => Assistance)
    winner: Assistance
}
