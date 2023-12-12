import {Args, Mutation, Resolver} from '@nestjs/graphql';
import {AuthService} from "./auth.service";
import {UseGuards} from "@nestjs/common";
import {LocalAuthGuard} from "./guards/local.guard";
import {LoginDto} from "./dto/login.dto";
import {CurrentUserPipe} from "./pipes/current_user.pipe";

@Resolver()
export class AuthResolver {

    constructor(private readonly authService: AuthService) {
    }

    @Mutation(returns => LoginDto)
    @UseGuards(LocalAuthGuard)
    async login(
        @Args('username') username: string,
        @Args('password') password: string,
        @CurrentUserPipe() user: any
    ): Promise<LoginDto> {
        return this.authService.login(user)
    }
}
