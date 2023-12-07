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

@Resolver(() => User)
export class UserResolver {
    constructor(
        private readonly userService: UserService,
        private readonly prisma: PrismaService
    ) {
    }

    @Mutation(() => User)
    createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
        return this.userService.create(createUserInput);
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
    getProfile(@CurrentUserPipe() {id}: any) {
        return this.userService.findOne({id})
    }

    @Mutation(() => User)
    updateUser(
        @Args('id',) id: string,
        @Args('updateUserInput') updateUserInput: UpdateUserInput
    ) {
        return this.userService.update({
            where: {id},
            data: updateUserInput
        });
    }

    @Mutation(() => User)
    removeUser(@Args('id') id: string) {
        return this.userService.remove({id});
    }

    @ResolveField(returns => [Event], {name: "events"})
    async getEvents(@Parent() user: User) {
        return this.prisma.event.findMany({where: {organizer_id: user.id}})
    }

    @ResolveField(returns => [Inscription], {name: "inscriptions"})
    async getInscriptions(@Parent() user: User) {
        return this.userService.getInscriptionsById(user.id)
    }

    @ResolveField(returns => [Reward], {name: "rewards"})
    async getRewards(@Parent() user: User) {
        return this.prisma.reward.findMany({where: {winner_id: user.id}})
    }
}
