import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthResolver} from './auth.resolver';
import {UserModule} from "../user/user.module";
import {LocalStrategy} from "./strategies/local.strategy";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {SECRET} from "./constants";
import {JwtStrategy} from "./strategies/jwt.strategy";

@Module({
    imports: [
        UserModule,
        PassportModule.register({defaultStrategy: ['jwt']}),
        JwtModule.register({
            global: true,
            secret: SECRET,
            signOptions: {
                expiresIn: '1d'
            }
        })
    ],
    providers: [AuthService, AuthResolver, LocalStrategy, JwtStrategy]
})
export class AuthModule {

}
