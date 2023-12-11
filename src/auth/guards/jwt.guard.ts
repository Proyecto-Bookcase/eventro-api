import {AuthGuard} from "@nestjs/passport";
import {ExecutionContext, Injectable} from "@nestjs/common";
import {GqlExecutionContext} from "@nestjs/graphql";
import {IncomingMessage} from "http";
import {Request} from "express";

@Injectable()
export class JWTAuthGuard extends AuthGuard('jwt') {

    constructor() {
        super();
    }
    getRequest(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context)
        return ctx.getContext().req
    }
}