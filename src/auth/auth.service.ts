import {Injectable} from '@nestjs/common';
import {UserService} from "../user/user.service";
import {JwtService} from "@nestjs/jwt";
import {CreateUserInput} from "../user/dto/create-user.input";

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) {
    }

    async validateUser(username: string, pass: string) {

        const user = await this.userService.findOne({name: username})

        if (user && user.password === pass) {
            const {password, ...result} = user
            return result
        }

        return null
    }

    login(user: any) {
        const payload = {username: user.name, sub: user.id}
        return {
            access_token: this.jwtService.sign(payload)
        }
    }

}
