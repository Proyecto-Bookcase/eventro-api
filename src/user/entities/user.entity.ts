import {Field, ID, ObjectType,} from '@nestjs/graphql';
import {Role} from "../../role/entities/role.entity";

@ObjectType()
export class User {

    @Field(type => ID)
    id: string

    /**
     * Email del Usuario
     */
    email: string;

    /**
     * Nombre del Usuario
     */
    name: string;

    /**
     * Contraseña del Usuario
     */
    password: string;

    /**
     * Si el email del usuario está confirmado
     */
    confirmed?: boolean;

    /**
     * Fecha de Creación
     */
    createdAt?: Date;

    /**
     * Fecha de Última actualización
     */
    updatedAt?: Date;

    /**
     * Rol del usuario
     */
    @Field(() => Role)
    role: Role;
}
