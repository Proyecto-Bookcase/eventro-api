import {AuthGuard} from "@nestjs/passport";
import {ExecutionContext, Injectable} from "@nestjs/common";
import {GqlExecutionContext} from "@nestjs/graphql";
import {IncomingMessage} from "http";

@Injectable()
export class JWTAuthGuard extends AuthGuard('jwt') {

    constructor() {
        super();
    }

    getRequest(context: ExecutionContext): IncomingMessage {
        const ctx = GqlExecutionContext.create(context).getContext().req;
        console.log(ctx.headers)
        return ctx
    }
}