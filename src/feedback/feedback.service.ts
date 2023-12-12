import {Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {Prisma} from '@prisma/client';

@Injectable()
export class FeedbackService {
    constructor(private readonly prisma: PrismaService) {
    }

    async create(data: Prisma.FeedbackCreateInput) {
        return this.prisma.feedback.create({data})
    }

    async findAll(
        skip?: number,
        take?: number,
        cursor?: Prisma.FeedbackWhereUniqueInput,
        where?: Prisma.FeedbackWhereInput,
        orderBy?: Prisma.FeedbackOrderByWithRelationInput
    ) {
        return this.prisma.feedback.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        })
    }

    async findOne(where: Prisma.FeedbackWhereUniqueInput) {
        return this.prisma.feedback.findUnique({where})
    }

    async update(
        where: Prisma.FeedbackWhereUniqueInput,
        data: Prisma.FeedbackUpdateManyMutationInput
    ) {
        return this.prisma.feedback.update({where, data})
    }

    async remove(where: Prisma.FeedbackWhereUniqueInput) {
        return this.prisma.feedback.delete({where})
    }
}
