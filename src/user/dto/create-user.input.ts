import { InputType } from '@nestjs/graphql';
import {Prisma} from "@prisma/client";

@InputType()
export class CreateUserInput implements Prisma.UserCreateManyInput{

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
   * Id del Rol del usuario
   */
  role_id: string;

}
