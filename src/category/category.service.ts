import {Injectable} from '@nestjs/common';
import {Prisma} from "@prisma/client";
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class CategoryService {

    constructor(private readonly prisma: PrismaService) {
    }

    async create(data: Prisma.CategoryCreateInput) {
        return this.prisma.category.create({data})
    }

    async findAll(
        skip?: number,
        take?: number,
        cursor?: Prisma.CategoryWhereUniqueInput,
        where?: Prisma.CategoryWhereInput,
        orderBy?: Prisma.CategoryOrderByWithRelationInput
    ) {
        return this.prisma.category.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        })
    }

    async findOne(where: Prisma.CategoryWhereUniqueInput) {
        return this.prisma.category.findUnique({where})
    }

    async update(
        where: Prisma.CategoryWhereUniqueInput,
        data: Prisma.CategoryUpdateManyMutationInput
    ) {
        return this.prisma.category.update({where, data})
    }

    async remove(where: Prisma.CategoryWhereUniqueInput) {
        return this.prisma.category.delete({where})
    }
}
