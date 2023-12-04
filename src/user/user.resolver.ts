import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {UserService} from './user.service';
import {User} from './entities/user.entity';
import {CreateUserInput} from './dto/create-user.input';
import {UpdateUserInput} from './dto/update-user.input';

@Resolver(() => User)
export class UserResolver {
    constructor(private readonly userService: UserService) {
    }

    @Mutation(() => User)
    createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
        return this.userService.create(createUserInput);
    }

    @Query(() => [User], {name: 'users'})
    findAll() {
        return this.userService.findAll();
    }

    @Query(() => User, {name: 'user'})
    findOne(@Args('id') id: string) {
        return this.userService.findOne({id});
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
}
