import {Field, InputType} from '@nestjs/graphql';
import {Prisma} from "@prisma/client";

@InputType()
export class CreateRewardInput implements Prisma.RewardCreateManyInput {

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
     * Id de la asistencia del Ganador del Premio
     */
    winner_id: string

}
