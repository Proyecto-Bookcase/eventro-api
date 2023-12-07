import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from "passport-jwt";
import {SECRET} from "../constants";

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken,
            ignoreExpiration: false,
            secretOrKey: SECRET
        });
    }

    validate(payload: any) {
        console.log("Aquí")
        return {userId: payload.sub, username: payload.username}
    }
}