import {Args, Mutation, Parent, Query, ResolveField, Resolver} from '@nestjs/graphql';
import {RoleService} from './role.service';
import {Role} from './entities/role.entity';
import {CreateRoleInput} from './dto/create-role.input';
import {UpdateRoleInput} from './dto/update-role.input';
import {Event} from "../../event/entities/event.entity";
import {PrismaService} from "../../prisma/prisma.service";
import {User} from "../entities/user.entity";

@Resolver(() => Role)
export class RoleResolver {
    constructor(
        private readonly roleService: RoleService,
        private readonly prisma: PrismaService
    ) {
    }

    @Mutation(() => Role)
    createRole(@Args('createRoleInput') input: CreateRoleInput) {
        return this.roleService.create({
            name: input.name
        });
    }

    @Query(() => [Role], {name: 'roles'})
    findAll() {
        return this.roleService.findAll();
    }

    @Query(() => Role, {name: 'role'})
    findOne(@Args('id') id: string) {
        return this.roleService.findOne({id});
    }

    @Mutation(() => Role)
    updateRole(
        @Args('id') id: string,
        @Args('updateRoleInput') input: UpdateRoleInput) {
        return this.roleService.update({id}, input);
    }

    @Mutation(() => Role)
    removeRole(@Args('id') id: string) {
        return this.roleService.remove({id});
    }

    @ResolveField(returns => [User], {name: 'users'})
    async getUsers(@Parent() {id}: Role) {

        const res = await this.prisma.role.findUnique({
            where: {id},
            select: {users: true}
        })

        return res.users
    }
}
