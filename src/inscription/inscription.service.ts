import {Injectable} from '@nestjs/common';
import {Prisma} from "@prisma/client";
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class InscriptionService {

    constructor(private prisma: PrismaService) {
    }

    async create(data: Prisma.InscriptionCreateInput) {
        return this.prisma.inscription.create({data})
    }

    async findAll(params?: {
        skip?: number
        take?: number
        cursor?: Prisma.InscriptionWhereUniqueInput
        where?: Prisma.InscriptionWhereInput
        orderBy?: Prisma.InscriptionOrderByWithRelationInput
    }) {
        return this.prisma.inscription.findMany(params)
    }

    async findOne(where: Prisma.InscriptionWhereUniqueInput) {
        return this.prisma.inscription.findUnique({where})
    }

    async update(params: {
        where: Prisma.InscriptionWhereUniqueInput
        data: Prisma.InscriptionUpdateInput
    }) {
        return this.prisma.inscription.update(params)
    }

    async remove(where: Prisma.InscriptionWhereUniqueInput) {
        return this.prisma.inscription.delete({where});
    }
}
