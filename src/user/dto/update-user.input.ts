import {Prisma} from '@prisma/client';
import {CreateUserInput} from './create-user.input';
import {InputType, PartialType} from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) implements Prisma.UserUpdateManyMutationInput {
}
