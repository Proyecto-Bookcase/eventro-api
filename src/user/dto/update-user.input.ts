import { Prisma } from '@prisma/client';
import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends CreateUserInput implements Prisma.UserUpdateInput {

}
