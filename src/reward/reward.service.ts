import {Injectable} from '@nestjs/common';
import {Prisma} from "@prisma/client";
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class RewardService {

    constructor(private prisma: PrismaService) {
    }

    async create(data: Prisma.RewardCreateInput) {
        return this.prisma.reward.create({data});
    }

    async findAll(params?: {
        skip?: number;
        take?: number;
        cursor?: Prisma.RewardWhereUniqueInput;
        where?: Prisma.RewardWhereInput;
        orderBy?: Prisma.RewardOrderByWithRelationInput;
    }) {
        return this.prisma.reward.findMany(params)
    }

    async findOne(where: Prisma.RewardWhereUniqueInput) {
        return this.prisma.reward.findUnique({where})
    }

    update(params: {
        where: Prisma.RewardWhereUniqueInput;
        data: Prisma.RewardUpdateInput;
    }) {
        return this.prisma.reward.update(params)
    }

    remove(where: Prisma.RewardWhereUniqueInput) {
        return this.prisma.reward.delete({where})
    }
}
