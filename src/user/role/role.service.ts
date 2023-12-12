import {Injectable} from '@nestjs/common';
import {PrismaService} from "../../prisma/prisma.service";
import {Prisma} from '@prisma/client';

@Injectable()
export class RoleService {

    constructor(private readonly prisma: PrismaService) {
    }

    async create(data: Prisma.RoleCreateInput) {
        return this.prisma.role.create({data})
    }

    async findAll(
        skip?: number,
        take?: number,
        cursor?: Prisma.RoleWhereUniqueInput,
        where?: Prisma.RoleWhereInput,
        orderBy?: Prisma.RoleOrderByWithRelationInput
    ) {
        return this.prisma.role.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        })
    }

    async findOne(where: Prisma.RoleWhereUniqueInput) {
        return this.prisma.role.findUnique({where})
    }

    async update(
        where: Prisma.RoleWhereUniqueInput,
        data: Prisma.RoleUpdateManyMutationInput
    ) {
        return this.prisma.role.update({where, data})
    }

    async remove(where: Prisma.RoleWhereUniqueInput) {
        return this.prisma.role.delete({where})
    }

}
