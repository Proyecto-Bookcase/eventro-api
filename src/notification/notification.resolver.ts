import {Args, Mutation, Parent, Query, Resolver} from '@nestjs/graphql';
import {NotificationService} from './notification.service';
import {Notification} from './entities/notification.entity';
import {CreateNotificationInput} from './dto/create-notification.input';
import {UpdateNotificationInput} from './dto/update-notification.input';
import {PrismaService} from "../prisma/prisma.service";
import {User} from "../user/entities/user.entity";

@Resolver(() => Notification)
export class NotificationResolver {
    constructor(
        private readonly notificationService: NotificationService,
        private readonly prisma: PrismaService
    ) {
    }

    @Mutation(() => Notification)
    createNotification(@Args('createNotificationInput') input: CreateNotificationInput) {
        return this.notificationService.create({
            date: input.date,
            content: input.content,
            reason: input.reason,
            tittle: input.tittle,
            user: {connect: {email: input.user_email}}
        });
    }

    @Query(() => [Notification], {name: 'notifications'})
    findAll() {
        return this.notificationService.findAll();
    }

    @Query(() => Notification, {name: 'notification'})
    findOne(@Args('id') id: string) {
        return this.notificationService.findOne({id});
    }

    @Mutation(() => Notification)
    updateNotification(
        @Args('id') id: string,
        @Args('updateNotificationInput') input: UpdateNotificationInput) {
        return this.notificationService.update({id}, input);
    }

    @Mutation(() => Notification)
    removeNotification(@Args('id') id: string) {
        return this.notificationService.remove({id});
    }

    @Mutation(returns => User, {name: 'user'})
    async getUser(@Parent() {id}: Notification) {
        const res = await this.prisma.notification.findUnique({
            where: {id},
            select: {user: true}
        })
        return res.user
    }
}
