import {Args, Int, Mutation, Parent, Query, ResolveField, Resolver} from '@nestjs/graphql';
import {UserService} from './user.service';
import {User} from './entities/user.entity';
import {CreateUserInput} from './dto/create-user.input';
import {UpdateUserInput} from './dto/update-user.input';
import {Inscription} from "../inscription/entities/inscription.entity";
import {PrismaService} from "../prisma/prisma.service";
import {Reward} from "../reward/entities/reward.entity";
import {Event} from "../event/entities/event.entity";
import {UseGuards} from "@nestjs/common";
import {JWTAuthGuard} from "../auth/guards/jwt.guard";
import {CurrentUserPipe} from "../auth/pipes/current_user.pipe";
import {Role} from "./role/entities/role.entity";

@Resolver(() => User)
export class UserResolver {
    constructor(
        private readonly userService: UserService,
        private readonly prisma: PrismaService
    ) {
    }

    @Mutation(() => User)
    createUser(@Args('createUserInput') input: CreateUserInput) {
        return this.userService.create({
            name: input.name,
            createdAt: input.createdAt,
            role: {connect: {id: input.role_id}},
            confirmed: input.confirmed,
            updatedAt: input.updatedAt,
            email: input.email,
            password: input.password,
        });
    }

    @Query(() => [User], {name: 'users'})
    async findAll(@Args('page', {type: () => Int, defaultValue: 1}) page: number) {

        const users = await this.userService.findAll()

        return users.slice((page - 1) * 20, page * 20)
    }

    @Query(() => User, {name: 'user'})
    findOne(@Args('username') name: string) {
        return this.userService.findOne({name});
    }

    @Query(returns => User, {name: "profile"})
    @UseGuards(JWTAuthGuard)
    getProfile(@CurrentUserPipe() {email}: any) {
        return this.userService.findOne({email})
    }

    @Mutation(() => User)
    updateUser(
        @Args('email',) email: string,
        @Args('updateUserInput') input: UpdateUserInput
    ) {
        return this.userService.update({
            where: {email},
            data: {
                name: input.name,
                createdAt: input.createdAt,
                role: {connect: {id: input.role_id}},
                confirmed: input.confirmed,
                updatedAt: input.updatedAt,
                email: input.email,
                password: input.password,
            }
        });
    }

    @Mutation(() => User)
    removeUser(@Args('email') email: string) {
        return this.userService.remove({email});
    }

    @ResolveField(() => Role, {name: "role"})
    async getRole(@Parent() user: User) {
        return this.prisma.user.findUnique({
            where: {email: user.email},
            select: {role_id: true}
        }).role()
    }

    @ResolveField(returns => [Event], {name: "events"})
    async getEvents(@Parent() user: User) {
        return this.prisma.event.findMany({where: {organizer_email: user.email}})
    }

    @ResolveField(returns => [Inscription], {name: "inscriptions"})
    async getInscriptions(@Parent() user: User) {
        return this.userService.getInscriptionsByEmail(user.email)
    }

    @ResolveField(returns => [Reward], {name: "rewards"})
    async getRewards(@Parent() {email}: User) {
        return this.prisma.reward.findMany({where: {winner: {inscription: {user_email: email}}}})
    }
}
