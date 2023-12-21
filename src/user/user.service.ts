import {Injectable} from '@nestjs/common';
import {PrismaService} from '../prisma/prisma.service';
import {Prisma} from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {
    }

    async create(data: Prisma.UserCreateInput) {
        return this.prisma.user.create({data});
    }

    async findAll(params?: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UserWhereUniqueInput;
        where?: Prisma.UserWhereInput;
        orderBy?: Prisma.UserOrderByWithRelationInput;
    }) {
        return this.prisma.user.findMany(params);
    }

    async findOne(where: Prisma.UserWhereUniqueInput) {
        return this.prisma.user.findUnique({where});
    }

    async update(params: {
        where: Prisma.UserWhereUniqueInput;
        data: Prisma.UserUpdateInput;
    }) {
        return this.prisma.user.update(params);
    }

    async remove(where: Prisma.UserWhereUniqueInput) {
        return this.prisma.user.delete({where});
    }

    async getInscriptionsByEmail(email: string) {
        return this.prisma.inscription.findMany({where: {user: {email}}});
    }

    async subscribeUserToAnEvent(user_email: string, event_id: string) {
        return this.prisma.inscription.create({
            data: {
                user: {connect: {email: user_email}},
                event: {connect: {id: event_id}},
                date: new Date()
            }
        })
    }

}
