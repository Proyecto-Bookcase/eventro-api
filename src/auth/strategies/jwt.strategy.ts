import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from "passport-jwt";
import {SECRET} from "../constants";
import {User} from "../../user/entities/user.entity";

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: SECRET
        });
    }

    async validate(payload: { username: string, sub: User["id"] }) {
        return {id: payload.sub, username: payload.username}
    }
}