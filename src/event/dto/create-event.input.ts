import {InputType} from '@nestjs/graphql';
import {Prisma} from '@prisma/client';

@InputType()
export class CreateEventInput implements Prisma.EventCreateManyInput {

    /**
     * Nombre del Evento
     */
    name: string;

    /**
     * Email del organizador
     */
    organizer_email: string;

    /**
     * Nombre de la categoría del evento
     */
    category_name: string;

    /**
     * Descripción del Evento
     */
    description?: string;

    /**
     * Fecha de Inicio del Evento
     */
    date: Date;

    /**
     * Lugar donde se realiza el evento
     */
    location: string;

    /**
     * Capacidad máxima de personas que pueden participar en el evento
     */
    capacity?: number;

    /**
     * Indica si están activas las inscripciones
     */
    active?: boolean;

    /**
     * URL de la imagen que identifica al Evento
     */
    image?: string;

    /**
     * Fecha en la que se eliminó este evento
     */
    deletedAt?: Date;

}
