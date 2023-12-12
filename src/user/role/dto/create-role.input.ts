import {InputType} from '@nestjs/graphql';
import {Prisma} from '@prisma/client';

@InputType()
export class CreateRoleInput implements Prisma.RoleCreateManyInput {
    name: string;
}
