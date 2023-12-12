import {AuthGuard} from "@nestjs/passport";
import {ExecutionContext, Injectable} from "@nestjs/common";
import {GqlExecutionContext} from "@nestjs/graphql";
import {IncomingMessage} from "http";

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {

    constructor() {
        super();
    }

    getRequest(context: ExecutionContext): IncomingMessage {
        const ctx = GqlExecutionContext.create(context);
        const {username, password} = ctx.getArgs()
        const gqlReq = ctx.getContext().req;
        gqlReq.body.username = username
        gqlReq.body.password = password
        return gqlReq
    }
}