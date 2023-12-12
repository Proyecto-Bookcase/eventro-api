import {Prisma} from '@prisma/client';
import {CreateNotificationInput} from './create-notification.input';
import {InputType, PartialType} from '@nestjs/graphql';

@InputType()
export class UpdateNotificationInput extends PartialType(CreateNotificationInput) implements Prisma.NotificationUpdateManyMutationInput {
}
