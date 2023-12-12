import {InputType} from '@nestjs/graphql';
import {Prisma} from '@prisma/client';

@InputType()
export class CreateAssistanceInput implements Partial<Prisma.AssistanceCreateManyInput> {

    /**
     * Fecha de asistencia al Evento
     */
    date: Date;

    /**
     * Id de la inscripción
     */
    inscription_id: string;

}
