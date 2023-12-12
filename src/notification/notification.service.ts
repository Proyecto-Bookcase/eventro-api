import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import { Prisma } from '@prisma/client';

@Injectable()
export class NotificationService {
  constructor(private readonly prisma: PrismaService) {
  }

  async create(data: Prisma.NotificationCreateInput) {
    return this.prisma.notification.create({data})
  }

  async findAll(
      skip?: number,
      take?: number,
      cursor?: Prisma.NotificationWhereUniqueInput,
      where?: Prisma.NotificationWhereInput,
      orderBy?: Prisma.NotificationOrderByWithRelationInput
  ) {
    return this.prisma.notification.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy
    })
  }

  async findOne(where: Prisma.NotificationWhereUniqueInput) {
    return this.prisma.notification.findUnique({where})
  }

  async update(
      where: Prisma.NotificationWhereUniqueInput,
      data: Prisma.NotificationUpdateManyMutationInput
  ) {
    return this.prisma.notification.update({where, data})
  }

  async remove(where: Prisma.NotificationWhereUniqueInput) {
    return this.prisma.notification.delete({where})
  }
}
