import {Injectable} from '@nestjs/common';
import {Prisma} from "@prisma/client";
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class EventService {

    constructor(private prisma: PrismaService) {
    }

    async create(data: Prisma.EventCreateInput) {
        return this.prisma.event.create({data});
    }

    async findAll(params?: {
        skip?: number
        take?: number
        cursor?: Prisma.EventWhereUniqueInput
        where?: Prisma.EventWhereInput
        orderBy?: Prisma.EventOrderByWithRelationInput
    }) {
        return this.prisma.event.findMany(params)
    }

    async findOne(where: Prisma.EventWhereUniqueInput) {
        return this.prisma.event.findUnique({where});
    }

    async update(params: {
        where: Prisma.EventWhereUniqueInput
        data: Prisma.EventUpdateInput
    }) {
        return this.prisma.event.update(params)
    }

    async remove(where: Prisma.EventWhereUniqueInput) {
        return this.prisma.event.delete({where});
    }
}
