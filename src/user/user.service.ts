import {Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {Prisma} from "@prisma/client";

@Injectable()
export class UserService {

    constructor(private prisma: PrismaService) {
    }

    async create(data: Prisma.UserCreateInput) {
        return this.prisma.user.create({data})
    }

    async findAll(params?: {
        skip?: number
        take?: number
        cursor?: Prisma.UserWhereUniqueInput
        where?: Prisma.UserWhereInput
        orderBy?: Prisma.UserOrderByWithRelationInput
    }) {
        return this.prisma.user.findMany(params);
    }

    async findOne(where: Prisma.UserWhereUniqueInput) {
        return this.prisma.user.findUnique({where});
    }

    update(params: {
        where: Prisma.UserWhereUniqueInput
        data: Prisma.UserUpdateInput

    }) {
        return this.prisma.user.update(params)
    }

    remove(where: Prisma.UserWhereUniqueInput) {
        return this.prisma.user.delete({where})
    }
}
