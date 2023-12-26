import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {AuthService} from './auth.service';
import {UseGuards} from '@nestjs/common';
import {LocalAuthGuard} from './guards/local.guard';
import {LoginDto} from './dto/login.dto';
import {CurrentUserPipe} from './pipes/current_user.pipe';
import {CreateUserInput} from '../user/dto/create-user.input';
import {UserService} from '../user/user.service';
import {User} from "../user/entities/user.entity";

@Resolver()
export class AuthResolver {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService,
    ) {
    }

    @Mutation((returns) => LoginDto)
    @UseGuards(LocalAuthGuard)
    async login(
        @Args('username') username: string,
        @Args('password') password: string,
        @CurrentUserPipe() {name, email}: User,
    ): Promise<LoginDto> {
        return this.authService.login({name, sub: email});
    }

    @Query((returns) => String)
    hola() {
        return 'Hola';
    }

    @Mutation(returns => LoginDto)
    async signup(@Args('userDtoCreate', {type: () => CreateUserInput}) userDtoCreate: CreateUserInput) {

        const newUser = await this.userService.create({
            name: userDtoCreate.name,
            password: userDtoCreate.password,
            email: userDtoCreate.email,
            role: {connect: {id: userDtoCreate.role_id}},
            createdAt: userDtoCreate.createdAt,
            confirmed: userDtoCreate.confirmed,
            updatedAt: userDtoCreate.updatedAt,
        });

        return this.authService.login({name: newUser.name, sub: newUser.email});
    }
}
