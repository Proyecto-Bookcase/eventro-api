import {Prisma} from '@prisma/client';
import {CreateRewardInput} from './create-reward.input';
import {InputType, PartialType} from '@nestjs/graphql';

@InputType()
export class UpdateRewardInput extends PartialType(CreateRewardInput) implements Prisma.RewardUpdateManyMutationInput {
}
