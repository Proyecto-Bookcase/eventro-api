import {Injectable} from '@nestjs/common';
import {Prisma} from "@prisma/client";
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class AssistanceService {

    constructor(private prisma: PrismaService) {
    }

    async create(data: Prisma.AssistanceCreateInput) {
        return this.prisma.assistance.create({data})
    }

    async findAll(params?: {
        skip?: number
        take?: number
        cursor?: Prisma.AssistanceWhereUniqueInput
        where?: Prisma.AssistanceWhereInput
        orderBy?: Prisma.AssistanceOrderByWithRelationInput
    }) {
        return this.prisma.assistance.findMany(params);
    }

    async findOne(where: Prisma.AssistanceWhereUniqueInput) {
        return this.prisma.assistance.findUnique({where})
    }

    async update(params: {
        where: Prisma.AssistanceWhereUniqueInput
        data: Prisma.AssistanceUpdateInput
    }){
        return this.prisma.assistance.update(params)
    }

    async remove(where: Prisma.AssistanceWhereUniqueInput) {
        return this.prisma.assistance.delete(({where}))
    }
}
