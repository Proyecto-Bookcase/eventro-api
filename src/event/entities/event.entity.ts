import {Field, ID, Int, ObjectType} from '@nestjs/graphql';
import {User} from "../../user/entities/user.entity";
import {Inscription} from "../../inscription/entities/inscription.entity";
import {Reward} from "../../reward/entities/reward.entity";
import {Category} from "../../category/entities/category.entity";
import {Notification} from "../../notification/entities/notification.entity";

@ObjectType()
export class Event {

    @Field(type => ID)
    id: string;

    /**
     * Organizador del Evento
     */
    @Field(() => User)
    organizer: User;

    /**
     *Categoría del Evento
     */
    @Field(() => Category)
    category: Category

    /**
     * Nombre del Evento
     */
    name: string;

    /**
     * Descripción del Evento
     */
    @Field({nullable: true})
    description: string;

    /**
     * Fecha de Inicio del evento
     */
    date: Date;

    /**
     * Ubicación del Evento
     */
    location: string;

    /**
     * Capacidad máxima de inscripciones del Evento
     */
    @Field(() => Int, {nullable: true})
    capacity: number

    /**
     * Si el evento está abierto a Inscripciones
     */
    active: boolean

    /**
     * URL de la imagen que identifica al Evento
     */
    @Field({nullable: true})
    image: string

    /**
     * Fecha en la que este evento se borró
     */
    @Field({nullable: true})
    deletedAt?: Date

    /**
     * Inscripciones del Evento
     */
    @Field(() => [Inscription])
    inscriptions: Inscription[];

    /**
     * Premios otorgados en el evento
     */
    @Field(() => [Reward])
    rewards: Reward[];

    @Field(() => Notification)
    notifications: Notification[]
}
