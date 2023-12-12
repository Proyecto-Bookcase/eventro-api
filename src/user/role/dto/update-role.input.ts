import {Prisma} from '@prisma/client';
import {CreateRoleInput} from './create-role.input';
import {InputType, PartialType} from '@nestjs/graphql';

@InputType()
export class UpdateRoleInput extends PartialType(CreateRoleInput) implements Prisma.RoleUpdateManyMutationInput {
}
